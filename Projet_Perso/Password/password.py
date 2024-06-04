# Au moins une minuscule et MAJUSCULE.
# Au moins 2 chiffres.
# Au moins un caractere special.
# Au minimum 12 carateres. 

mdp = input("\nVeuillez entrez une mot de passe :\n")

def validateur (password):

    if len(password) <12 or len(password) > 45:
        print ("Le mot de passe doit etre compris entre 12 et 45 caratères minimums")

    minuscule = False
    majuscule = False
    chiffres = False
    special = False

    for i in range(len(password)):
        
        if password[i]>="a" and password[i]<="z":
            minuscule = True         
        if password[i]>="A" and password[i]<="Z":
            majuscule = True
        if password[i]>="0" and password[i]<="9":
            chiffres = True
        if password[i] == ["/","?","+","=","%","@","-","_","#","~","&","*","µ","$","£","^","|"]:
            special = True

    if minuscule == False :
        print ("Le mot de passe doit comporter une lettre minuscule.")
    if majuscule == False :
        print ("Le mot de passe doit comporter une lettre majuscule.")
    if chiffres == False :
        print ("Le mot de passe doit comporter un chiffre.")
    if special == False :
        print ("Le mot de passe doit comporter un caratere spécial.")

    elif (minuscule, majuscule, chiffres, special) :
        print ("Mot de passe valide.")

validateur(mdp)