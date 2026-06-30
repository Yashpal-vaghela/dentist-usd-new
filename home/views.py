import requests
from django.shortcuts import render, redirect
from django.contrib import messages
from django.conf import settings
from django.utils import timezone
from .models import Contact, DentistReview, gallery
from .forms import ContactForm

def homePage(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        recaptcha_response = request.POST.get('g-recaptcha-response')
        
        # Verify reCAPTCHA if response key is present
        if recaptcha_response:
            data = {
                'secret': settings.RECAPTCHA_SECRET_KEY,
                'response': recaptcha_response,
                'remoteip': request.META.get('REMOTE_ADDR')
            }
            try: 
                r = requests.post("https://www.google.com/recaptcha/api/siteverify", data=data, timeout=5)
                result = r.json()
            except requests.RequestException:
                result = {'success': False}

            if not result.get('success'):
                messages.error(request, 'Please complete the reCAPTCHA verification before submitting.')
                return redirect('homePage')

        if form.is_valid():
            form.save()
            messages.success(request, "Form submitted successfully!")
            return redirect('homePage')
        else:
            messages.error(request, "Failed to submit form. Please check your inputs and try again.")
    else:
        form = ContactForm()

    reviews = DentistReview.objects.filter(is_active=True)
    gallery_items = gallery.objects.all()
    return render(request, 'index.html', {
        'reviews': reviews, 
        'form': form, 
        'gallery': gallery_items, 
        "RECAPTCHA_SITE_KEY": settings.RECAPTCHA_SITE_KEY 
    })

