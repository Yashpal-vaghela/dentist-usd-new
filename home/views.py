from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Contact, DentistReview
from .forms import ContactForm

def homePage(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            contact = form.save(commit=False)
            first_name = form.cleaned_data.get('first_name')
            last_name = form.cleaned_data.get('last_name')
            contact.full_name = f"{first_name} {last_name}"
            contact.save()

            messages.success(request, "Form submitted successfully!")
            return redirect('homePage')
    else:
        form = ContactForm()

    reviews = DentistReview.objects.filter(is_active=True)
    return render(request, 'index.html', {'reviews': reviews, 'form': form})
