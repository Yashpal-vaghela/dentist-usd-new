from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Contact, DentistReview

def homePage(request):
    if request.method == "POST":
        first_name = request.POST.get("first_name")
        last_name = request.POST.get("last_name")

        Contact.objects.create(
            full_name=f"{first_name} {last_name}",
            email=request.POST.get("email"),
            phone=request.POST.get("phone"),
            city=request.POST.get("city"),
            message=request.POST.get("message"),
        )

        messages.success(request, "Form submitted successfully!")
        return redirect('homePage')

    reviews = DentistReview.objects.filter(is_active=True)
    return render(request, 'index.html', {'reviews': reviews})