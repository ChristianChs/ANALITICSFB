from facebook_scraper import get_posts
import pandas as pd
import os
import matplotlib.pyplot as plt
import time
import json
posts = []
post_id="Huarino_22-07-22"
data= get_posts(
    'CesarHuarinoAlcalde2022',
    cookies="./scraping/facebook.txt",
    options={
        "allow_extra_requests": False,
        "reactors": True,
        "reactions": True,
        "extra_info": True})
for post in data:
    #print(post)
    # print("POST URL : " + post['post_url'])
    # print("CANTIDAD DE REACCION : " )
    # print(post['reaction_count']) 
    # print("CANTIDAD DE COMPARTIDOS: " )
    # print(post['shares'])
    # print(post['comments'])
    # print(post['likes'])
    # print(post)
     posts.append(post)
     time.sleep(5)

with open(post_id + "_posts.json", "w") as f:
    json.dump(posts, f, default=str, indent=4)
# # Pasamos a formato base de datos
# fb_posts = pd.DataFrame(posts)
# plt.plot(fb_posts['time'], fb_posts['likes'])
# fb_posts.to_excel('./files/ComandoJuventudesCallacondo.xlsx',index=False)
