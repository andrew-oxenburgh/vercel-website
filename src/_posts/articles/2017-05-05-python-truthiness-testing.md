---
layout: page
title: Python truthiness in testing
categories: blog
excerpt:
tags: []
image:
  feature:
date: 2017-05-05
---

Python is a great language. I love Dynamically Typed language because it can be a lot easier to get code up and running, and real life isn't statically typed.

DT Languages though, don't have a compiler to check the syntax so a solid test suite, and TDD, will make you're life much, much easier.

A while ago I used the construct:

~~~
assert expression == False
~~~
{: .language-python}

and during the code review it was noted that the test could have been written as:

~~~
assert not expression
~~~
{: .language-python}

It looks as if you're using the niceness of python to be a bit more lucid.

I kind of nodded at the time, but it didn't feel right, and after a bit of thought and procrastination here is my answer.

---

This is not necessarily the case because that is testing the truthiness of the object, not that it is False, which may not be what you want.

As a demo:

~~~
def test_not_truthiness_in_asserts():
    assert (not False) == True
    assert (not None) == True
    assert (not 0) == True
    assert (not '') == True
    assert (not []) == True
    assert (not {}) == True
~~~
{: .language-python}

In a dynamically typed language like Python, you may want to test only the truthiness of the expression, but not necessarily.

I reckon in an assert test, you should always assert via equality, unless you are specifically ok with truthiness.

The same goes for asserting things are True

Interestingly:

~~~
def test_not_not_truthiness_in_asserts():
    assert not not True
    assert (not not 1) == True
    assert (not not ['a']) == True
    assert (not not {'a':'b'}) == True
    assert (not not 'kjkhdsfkjhkjdfsh') == True
~~~
{: .language-python}

I come from a strict C/C++/Java style of programming, and my preferences are all informed by that, but when unit testing, be specific.