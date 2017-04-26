#Gotta make a palindrome tester. It must return true
#if it's palindromic. It must have lowercase/uppercase whatever.
import re

def is_palindrome(raw_word):

    word = re.match(r'[^a-zA-Z]+', raw_word)
    if word.group() != None: 
        print(word.group())
    '''
    for i in range(0, len(word)):
        a = (word[i].lower() == word[-(i+1)].lower())

        if a == True:
            continue

        else:
            print("Not a palindrome")
            break
    if a == True:
        print("It is a palindrome.")
'''

is_palindrome("abcdefgfedcba")
is_palindrome("a!#bcd#ef@gFed%cba")

'''
This is a work in progress; I need to improve my regex skills if I
want to be able to exclude special characters.'''
