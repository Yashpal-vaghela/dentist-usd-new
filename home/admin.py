from django.contrib import admin
from django.utils.html import format_html, mark_safe
from .models import Contact, DentistReview


admin.site.register(Contact)


@admin.register(DentistReview)
class DentistReviewAdmin(admin.ModelAdmin):
    list_display = ('image_preview_thumbnail', 'doctor_name', 'rating', 'is_active', 'created_at')
    list_filter = ('is_active', 'rating')
    search_fields = ('doctor_name', 'review')
    list_editable = ('is_active',)
    readonly_fields = ('image_preview',)

    # Form layout — preview pehle dikhega, phir image upload field
    fields = ('doctor_name', 'rating', 'image', 'image_preview', 'review', 'is_active')

    class Media:
        """Admin form mein live preview JS load karta hai"""
        js = ('js/admin_image_preview.js',)

    def image_preview(self, obj):
        """Detail page par badi preview dikhata hai (already saved image)"""
        if obj.image:
            return format_html(
                '<img src="{}" style="max-width:300px; max-height:300px; '
                'border-radius:10px; object-fit:cover; '
                'box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />',
                obj.image.url
            )
        return mark_safe('<span style="color:#999;">— Pehle image select karein —</span>')

    image_preview.short_description = "Saved Image Preview"

    def image_preview_thumbnail(self, obj):
        """List page par chhota thumbnail dikhata hai"""
        if obj.image:
            return format_html(
                '<img src="{}" style="width:50px; height:50px; '
                'border-radius:50%; object-fit:cover;" />',
                obj.image.url
            )
        return "—"

    image_preview_thumbnail.short_description = "Photo"