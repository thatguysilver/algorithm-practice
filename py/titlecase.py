#I have to capitalize the first word of any string.

def titlecase(string):
    string = string.lower()
    first_letter = string[0]
    first_letter = first_letter.capitalize()
    print(first_letter)
    print(string)

titlecase("why NOT go away For a whilE?")
