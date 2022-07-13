from facebook_scraper import *
from facebook_scraper import get_posts
from facebook_scraper import get_reactors
import pandas as pd
import os
import matplotlib.pyplot as plt
posts=[]
#Obtiene nombre de los perfiles que reaccionaron a un post
#Obtener lista de reactores de una publicacion  
#ref:https://github.com/kevinzg/facebook-scraper/issues/739
set_cookies("./scraping/facebook.txt")
for name in get_reactors(104621198963891):
    print(name['name'])
    posts.append(name)
    time.sleep(2)

# # Pasamos a formato base de datos
fb_posts = pd.DataFrame(posts)
plt.plot(fb_posts['name'], fb_posts['link'])
fb_posts.to_excel('./files/h1.xlsx',index=False)
#print(next(get_reactors(130078019548594)))