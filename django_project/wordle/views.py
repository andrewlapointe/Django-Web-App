from django.shortcuts import render

def home(request):

    context = {
        'page': 'wordle-game'
    }

    return render(request, 'wordle/home.html', context)


def about(request):

    context = {
        'page': 'wordle-about'
    }

    return render(request, 'wordle/about.html', context)