from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Tweet(models):
    author=models.ForeignKey(User,on_delete=models.CASCADE,related_name="tweets")
    text=models.TextField(max_length=350)
    replies=models.ManyToManyField("self",on_delete=models.SET_NULL,related_name="parent",null=True,default=None,blank=True)
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now=True)
    likes=models.ManyToManyField(User,related_name="liked",default=None,blank=True,null=True)

