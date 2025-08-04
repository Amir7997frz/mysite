from django.http import HttpResponse 


def index(request):
    return HttpResponse('<h1> خانه</h1>')

def about(request):
    return HttpResponse('<h1>درباره ما</h1>')

def contact(request):
    return HttpResponse('<h1>ارتباط با ما</h1>')
