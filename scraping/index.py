from facebook_scraper import get_posts
import pandas as pd
import os
import matplotlib.pyplot as plt


#Para evitar inhabilitacon de la cuenta
#options={"allow_extra_requests": False, "posts_per_page": 200}
posts = []
##login('eduardocrincon2021@gmail.com','tacna2021')
# Obtenemos la información de las publicaciones
for post in get_posts('MovimientoIndependienteRegionalFuerzaTacna',credentials=('christianchoques@outlook.com','5egur1dad***'),options={"extra_info": True}):
    #print(post)
    print("POST URL : " + post['post_url'])
    print("CANTIDAD DE REACCION : " )
    print(post['reaction_count']) 
    print("CANTIDAD DE COMPARTIDOS: " )
    print(post['shares'])
    print(post['comments'])
    print(post['likes'])
    print(post)
    posts.append(post)

get_page_info('MovimientoIndependienteRegionalFuerzaTacna',credentials=('eduardocrincon2021@gmail.com','tacna2021'),options={"reactors": True})
# # Pasamos a formato base de datos
# fb_posts = pd.DataFrame(posts)
# plt.plot(fb_posts['time'], fb_posts['likes'])
# fb_posts.to_excel('callacondo.xlsx',index=False)


#NUEVO CODIGO LIMPIO
post_id = "2075045235985932"
post = next(get_posts(
    post_urls=[post_id],
    cookies="cookies.json",
    options={
        "allow_extra_requests": False,
        "comments": True,
        "reactors": True,
        "reactions": True,
        "comment_reactors": False,
    },
))

with open(post_id + "_new.json", "w") as f:
    json.dump(post, f, default=str, indent=4)

#NUEVO CODIGO LIMPIO MEJORADO VERIFICA SI HAY NUEVOS COMENTARIOS // "comments": True QUITAR PARA NO OBTNER COMENTARIOS
post_id = "2075045235985932"
filename = post_id + ".json"
if os.path.isfile(filename):
    with open(filename, "r") as f:
        prev_post = json.load(f)

    top_level_comments = len(prev_post["comments_full"])
    replies = sum(len(c["replies"]) for c in prev_post["comments_full"])
    reactors = len(prev_post["reactors"])
    comment_times = [c["comment_time"] for c in prev_post["comments_full"]]
    print(
        f'''Cached version of post has:
        {prev_post["comments"]} comments
        from {min(comment_times)} to {max(comment_times)}
        {top_level_comments} top level comments
        {top_level_comments + replies} total comments extracted
        {prev_post["reaction_count"]} reactions
        {prev_post["reactions"]}
        {reactors} reactors'''
    )

else:
    prev_post = {}
    comment_start_url = None

post = next(get_posts(
    post_urls=[post_id],
    cookies="cookies.json",
    options={
        "allow_extra_requests": False,
        "reactions": True,
        "comment_reactors": False,
    },
))
print(
    f'Live version of post has {post["comments"]} comments and {post["reaction_count"]} reactions'
)
if post["comments"] > prev_post.get("comments", 0) or post["reaction_count"] > prev_post.get("reaction_count", 0):
    print("Post has new data, refetching")
    post = next(get_posts(
        post_urls=[post_id],
        cookies="cookies.json",
        options={
            "allow_extra_requests": False,
            "comments": True,
            "reactors": True,
            "reactions": True,
            "comment_reactors": False,
        },
    ))
    
    with open(post_id + "_new.json", "w") as f:
        json.dump(post, f, default=str, indent=4)

#Obtener lista de reactores de una publicacion  
pprint(next(get_reactors(5746385992055254)))