from django import forms
from home.models import Contact

class ContactForm(forms.ModelForm):
    first_name = forms.CharField(max_length=100)
    last_name = forms.CharField(max_length=100)

    class Meta:
        model = Contact
        fields = ['first_name', 'last_name', 'email', 'phone', 'city', 'message']
