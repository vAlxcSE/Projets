import pandas as pd 

df = pd.read_csv ('SeaCareerSet.csv')

# Afficher les 10 premieres lignes.
# print(df.head(10))

# Afficher les 15 dernières lignes.
# print(df.tail(15))

# Afficher des colonnes au hasard et création de fichiers.
# ndf = (df.sample(20))
# ndf.to_csv('SeaCareerSetALEATOIRE.csv', index=False)

# Afficher le nombre de colonnes et de rows
# rows = len(df.axes[0])
# cols = len(df.axes[1])
# print("Number of rows :", rows, "and number of columns :", cols)

#Afficher le nombre de ayant obtenu une Maîtrise.
# ndf = df[df["education"] == "Masters"]
# print(ndf)

#Afficher que les passagers majeurs.
# ndf = df[df["age"] >= 18]
# print(ndf)

# Afficher les passagers voyageant seuls.
# ndf = df[df["embarked"] == "S"]
# ndf.to_csv('SinglePassengers.csv', index=False)

# Afficher les plus travailleurs.
print(df.sort_values("hours_per_week" , ascending=False))