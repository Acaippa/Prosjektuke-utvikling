from django.db import models

class Section(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    content = models.TextField(max_length=2500)

    def __str__(self):
        return self.content