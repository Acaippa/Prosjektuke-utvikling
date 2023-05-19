from django.shortcuts import render
from .models import Section

def home_view(request):
    return render(request, "index.html", {"sections" : Section.objects.all()})