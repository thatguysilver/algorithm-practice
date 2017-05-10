#! /usr/bin/python3

#I have to capitalize the first word of any word in a string.

def titlecase(str):
    str = str.split()
    for word in range(len(str)):
        str[word] = str[word].capitalize()
    print(' '.join(str))
titlecase("why NOT go away For a whilE?")
