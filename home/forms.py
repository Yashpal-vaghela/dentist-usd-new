from django import forms
from .models import *

class ContactForm(forms.ModelForm):
    first_name = forms.CharField(max_length=100)
    last_name = forms.CharField(max_length=100)

    class Meta:
        model = Contact
        fields = ['first_name','last_name', 'email', 'phone', 'city', 'message']