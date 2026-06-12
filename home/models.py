from django.db import models


# Create your models here.
class Contact(models.Model):
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    city = models.CharField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name


class DentistReview(models.Model):
    doctor_name = models.CharField(max_length=200, verbose_name="Doctor Name")
    rating = models.DecimalField(max_digits=2, decimal_places=1, default=5.0, verbose_name="Rating (0.0 - 5.0)")
    image = models.ImageField(upload_to='dentist_image/', verbose_name="Doctor Image")
    review = models.TextField(verbose_name="Review")
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True, verbose_name="Show on website")

    class Meta:
        verbose_name = "Dentist Review"
        verbose_name_plural = "Dentist Reviews"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.doctor_name} - {self.rating}★"
