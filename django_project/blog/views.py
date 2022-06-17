from django.shortcuts import render

posts = [
    {
        'author': 'AndrewL',
        'title': 'Blog Post 1',
        'content': 'Content',
        'date_posted': 'June 15, 2022',
    },
    {
        'author': 'Boogy Man',
        'title': 'Blog Post 2',
        'content': 'Content 2',
        'date_posted': 'June 15, 2022',
    }
]


def home(request):
    context = {
        'posts': posts
    }
    return render(request, 'blog/home.html', context)

def about(request):
    return render(request, 'blog/about.html', {'title': 'About'})
