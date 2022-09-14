// 20220913203958
// https://serpapi.com/searches/dd0986bf32729d30/63210f6f4b91ebc608a19d09.json

const response = {
    "search_metadata": {
      "id": "63210f6f4b91ebc608a19d09",
      "status": "Success",
      "json_endpoint": "https://serpapi.com/searches/dd0986bf32729d30/63210f6f4b91ebc608a19d09.json",
      "created_at": "2022-09-13 23:17:03 UTC",
      "processed_at": "2022-09-13 23:17:03 UTC",
      "google_url": "https://www.google.com.br/search?q=nescau&oq=nescau&uule=w+CAIQICIVU3RhdGUgb2YgQ2VhcmEsQnJhemls&hl=pt&gl=br&tbm=shop&sourceid=chrome&ie=UTF-8",
      "raw_html_file": "https://serpapi.com/searches/dd0986bf32729d30/63210f6f4b91ebc608a19d09.html",
      "total_time_taken": 2.85
    },
    "search_parameters": {
      "engine": "google",
      "q": "nescau",
      "location_requested": "State of Ceara, Brazil",
      "location_used": "State of Ceara,Brazil",
      "google_domain": "google.com.br",
      "hl": "pt",
      "gl": "br",
      "device": "desktop",
      "tbm": "shop"
    },
    "search_information": {
      "shopping_results_state": "Results for exact spelling",
      "query_displayed": "nescau",
      "menu_items": [
        {
          "position": 1,
          "title": "Todas",
          "link": "https://www.google.com.br/search?q=nescau&hl=pt&gl=br&source=lnms&sa=X&ved=0ahUKEwi2y_2u85L6AhVkkWoFHdgVAisQ_AUI1gYoAA"
        },
        {
          "position": 2,
          "title": "Imagens",
          "link": "https://www.google.com.br/search?q=nescau&hl=pt&gl=br&tbm=isch&source=lnms&sa=X&ved=0ahUKEwi2y_2u85L6AhVkkWoFHdgVAisQ_AUI1wYoAQ",
          "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&q=nescau&tbm=isch"
        },
        {
          "position": 3,
          "title": "Maps",
          "link": "https://maps.google.com.br/maps?q=nescau&uule=w+CAIQICIVU3RhdGUgb2YgQ2VhcmEsQnJhemls&hl=pt&gl=br&um=1&ie=UTF-8&sa=X&ved=0ahUKEwi2y_2u85L6AhVkkWoFHdgVAisQ_AUI2AYoAg"
        },
        {
          "position": 4,
          "title": "Shopping"
        }
      ]
    },
    "filters": [
      {
        "type": "Mostrar apenas",
        "options": [
          {
            "text": "Disponíveis nas proximidades",
            "tbs": "mr:1,local_avail:1,ss:55"
          },
          {
            "text": "Promoção",
            "tbs": "mr:1,sales:1"
          }
        ]
      },
      {
        "type": "Preço",
        "options": [
          {
            "text": "Até R$ 10",
            "tbs": "mr:1,price:1,ppr_max:10"
          },
          {
            "text": "R$ 10 – R$ 30",
            "tbs": "mr:1,price:1,ppr_min:10,ppr_max:30"
          },
          {
            "text": "R$ 30 – R$ 70",
            "tbs": "mr:1,price:1,ppr_min:30,ppr_max:70"
          },
          {
            "text": "R$ 70 – R$ 150",
            "tbs": "mr:1,price:1,ppr_min:70,ppr_max:150"
          },
          {
            "text": "Acima de R$ 150",
            "tbs": "mr:1,price:1,ppr_min:150"
          }
        ]
      },
      {
        "type": "Marca",
        "options": [
          {
            "text": "Nestlé",
            "tbs": "mr:1,pdtr0:997763%7C1030275"
          },
          {
            "text": "NESCAFÉ",
            "tbs": "mr:1,pdtr0:997763%7C1050965"
          },
          {
            "text": "Hayabusa",
            "tbs": "mr:1,pdtr0:997763%7C1002333003"
          },
          {
            "text": "OMO",
            "tbs": "mr:1,pdtr0:997763%7C3168685"
          }
        ]
      },
      {
        "type": "Tamanho",
        "options": [
          {
            "text": "< 200 g",
            "tbs": "mr:1,pdtr0:1866429%7C%24200.0"
          },
          {
            "text": "200 – 370 g",
            "tbs": "mr:1,pdtr0:1866429%7C200.0%24370.0"
          },
          {
            "text": "370 – 550 g",
            "tbs": "mr:1,pdtr0:1866429%7C370.0%24550.0"
          },
          {
            "text": "> 550 g",
            "tbs": "mr:1,pdtr0:1866429%7C550.0%24"
          }
        ]
      },
      {
        "type": "Quantidade de açúcar",
        "options": [
          {
            "text": "Sem açúcar adicionado",
            "tbs": "mr:1,pdtr0:2224119%7C2294795"
          },
          {
            "text": "Açúcar reduzido",
            "tbs": "mr:1,pdtr0:2224119%7C2224120"
          },
          {
            "text": "Sem açúcar",
            "tbs": "mr:1,pdtr0:2224119%7C2224121"
          }
        ]
      },
      {
        "type": "Frete e devoluções",
        "options": [
          {
            "text": "Devolução gratuita",
            "tbs": "mr:1,free_return:1"
          },
          {
            "text": "Frete grátis",
            "tbs": "mr:1,ship:1"
          }
        ]
      },
      {
        "type": "Avaliação do produto",
        "options": [
          {
            "text": "4 ou mais",
            "tbs": "mr:1,avg_rating:400"
          }
        ]
      },
      {
        "type": "Vendedor",
        "options": [
          {
            "text": "Americanas.com",
            "tbs": "mr:1,merchagg:g103278022%7Cm110551677%7Cm174380028%7Cm285480096%7Cm285502537%7Cm124977022"
          },
          {
            "text": "Casas Bahia",
            "tbs": "mr:1,merchagg:g115160181%7Cm143357536%7Cm603798326"
          },
          {
            "text": "Mercado Livre",
            "tbs": "mr:1,merchagg:g8670533%7Cm303034130%7Cm388199188%7Cm406651805%7Cm114079028%7Cm358246630"
          },
          {
            "text": "Pontofrio.com",
            "tbs": "mr:1,merchagg:g115172300%7Cm143195331%7Cm603798935%7Cm278569667"
          },
          {
            "text": "redecompras.com",
            "tbs": "mr:1,merchagg:m603224073"
          },
          {
            "text": "Shopee",
            "tbs": "mr:1,merchagg:g142484886%7Cm548914629%7Cm447636513"
          },
          {
            "text": "Super Pague Menos",
            "tbs": "mr:1,merchagg:m620485221"
          }
        ]
      }
    ],
    "shopping_results": [
      {
        "position": 1,
        "title": "Achocolatado Em Pó 400g Nescau",
        "link": "https://www.magazineluiza.com.br/achocolatado-em-po-nescau-original-400g-nestle/p/cb8g4d92ge/me/achl/?&seller_id=mercadotaismani",
        "product_link": "https://www.google.com.br/shopping/product/4802297811542009748?gl=br",
        "product_id": "4802297811542009748",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=4802297811542009748",
        "source": "Magazine Luiza",
        "price": "R$ 7,83",
        "extracted_price": 7.83,
        "rating": 4.7,
        "reviews": 77,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQv3hrWJgd5PCXQGGWhB4TvgPw-5J227YfcqBA4-ktVQIu8apKDn77aKJ9F926ulBr7IL9Hn9j16H_z3HZpn0CzAw9oa03wl_pMJBsNUmk5_jU391ZaqmSv&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 2,
        "title": "Nescau achocolatado em pó nescau - vários tamanhos NoBrand",
        "link": "https://shopee.com.br/Nescau-achocolatado-em-p%C3%B3-nescau---v%C3%A1rios-tamanhos-i.427349430.17423299721",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:9454633239387306679",
        "product_id": "9454633239387306679",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=9454633239387306679",
        "source": "Shopee",
        "price": "R$ 7,99",
        "extracted_price": 7.99,
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSdT9PWH6awdKzrES0rPIxlgwrSEzR6oeu5HI3BEm5VpIFyvmKtmz3hglQUNjYzCTqhLukp8mDwYs8jw1plKQ-Wdx7CBYmc&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 3,
        "title": "Achocolatado Nescau Activ-Go 335g",
        "link": "https://www.americanas.com.br/produto/5673972605?opn=YSMESP&offerId=62fcffddadbc5f39b9bf668f&srsltid=AdGWZVTxuGNLC61I_q4jafYvDJ8MHpJqSev1_xz9ajRpxDjUcJvz4g5Cxmg",
        "product_link": "https://www.google.com.br/shopping/product/11708914069133501622?gl=br",
        "product_id": "11708914069133501622",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=11708914069133501622",
        "source": "Americanas.com",
        "price": "R$ 6,07",
        "extracted_price": 6.07,
        "rating": 4.6,
        "reviews": 32,
        "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSa0h_xBQMND5a4MVrmW7Zpv_325M6YIcEOl7-GDmoUlVFUgHCEm4hboKujVZQ73RADuDXP_43clje9v33N4HrjC35bIdeT29OtZYQ5gXFpWHn6B5K0LvAF&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 4,
        "title": "Nescau",
        "link": "https://www.magazineluiza.com.br/nescau/p/abj8h52j13/md/otmd/?&seller_id=santinomercado",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:7217616108295026973",
        "product_id": "7217616108295026973",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=7217616108295026973",
        "source": "Magazine Luiza",
        "price": "R$ 10,00",
        "extracted_price": 10.0,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSvtXJrbgvJ0h2EtHdDwS-vmhv3n2Fpb_uSmcG-hG4ilDSZ-2bTx0tMsjHIJnaCRMeZoZ1BqxaHLxzCIizfem_oj-EibNWoFe5SSx7LlexFUo98F3Kgn1q8uQ&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 5,
        "title": "Achocolatado Em Pó Nescau 2 Kg",
        "link": "https://www.tendaatacado.com.br/produto/Achocolatado-em-Po-Nescau-2kg-17769",
        "product_link": "https://www.google.com.br/shopping/product/10210873752792551001?gl=br",
        "product_id": "10210873752792551001",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=10210873752792551001",
        "source": "Tenda Atacado",
        "price": "R$ 27,50",
        "extracted_price": 27.5,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTFeagcPLPHDYD1deVD-L__tFf3bM53iImQf85Sdz-rXUkEx4TvM3PjT5D2HN2sWBcb_fNRTsj3PpwswKYBjoTcUp2XjBYmo7Xk-4BQVDGFfrsWqDdd6kuN&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 6,
        "title": "Achocolatado Em Pó Nescau 730 G",
        "link": "https://www.mambo.com.br/achocolatado-nescau-embalagem-economica-sache-730g/p?idsku=166&srsltid=AdGWZVThcEDpH7DhoPZH-zGCORgJqochmA7goSy-l1qsHPVV7CU_K_T7Q88",
        "product_link": "https://www.google.com.br/shopping/product/10106997689313874774?gl=br",
        "product_id": "10106997689313874774",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=10106997689313874774",
        "source": "Mambo Delivery",
        "price": "R$ 14,98",
        "extracted_price": 14.98,
        "rating": 5.0,
        "reviews": 3,
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQW0jyKMhj76BxTClqL9GJu6rCK8vxyv-Z3c3EhbYKL4ZjIbg_jwSYJDpUhlgaAWP6G6_0sr7ajERpyCZmiplxGqXewydm5TJL4OiaqRfA&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 7,
        "title": "Achocolatado Nescau Chocolate Branco, Duo, Canela ou Chocomelo 180g Edição ...",
        "link": "https://shopee.com.br/Achocolatado-Nescau-Chocolate-Branco--Duo--Canela-ou-Chocomelo-180g-Edi%C3%A7%C3%A3o-Limitada-i.296858075.14782371793",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:726748548472922841",
        "product_id": "726748548472922841",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=726748548472922841",
        "source": "Shopee",
        "price": "R$ 19,99",
        "extracted_price": 19.99,
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_mN_L7vrQnorM9WczCoJdN9yjkOOYukh3bt9kpZP6sFmeduGYRFOE86GdA6mOCIEHCEU3o05LwVHMXdSIS4a2QwiNgZZj_J0K12El7b8_GenEp3zDBRdGQQ&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 8,
        "title": "Kit Achocolatado Nescau Instantâneo Refil Econômico Original NESCAU NESTLE ...",
        "link": "https://produto.mercadolivre.com.br/MLB-2705873719-kit-achocolatado-nescau-instantneo-refil-econmico-original-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:10696089261786983666",
        "product_id": "10696089261786983666",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=10696089261786983666",
        "source": "Mercado Livre",
        "price": "R$ 24,99",
        "extracted_price": 24.99,
        "extensions": [
          "PROMOÇÃO"
        ],
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjUCEWuj6Qjkq_-3JavSZfIxfMySylrFtxgys556KIKpgOYtOe8wSPeXJBs8gtisMOPXCEPc3CxWn6BXVI5y30m609knBbj9p00sC1DPb7CAGDI7R6x-6M&usqp=CAE",
        "tag": "PROMOÇÃO",
        "delivery": "Frete não incluído"
      },
      {
        "position": 9,
        "title": "Achocolatado Nescau 350 Gramas Nestle Kit 3",
        "link": "https://www.extra.com.br/kit-3-achocolatado-nescau-400-gramas-nestle-1535545203/p/1535545203?utm_medium=cpc&utm_source=google_freelisting&IdSku=1535545203&idLojista=12231&tipoLojista=3P",
        "product_link": "https://www.google.com.br/shopping/product/8462046042667826489?gl=br",
        "product_id": "8462046042667826489",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=8462046042667826489",
        "source": "Extra.com.br",
        "price": "R$ 37,07",
        "extracted_price": 37.07,
        "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS2PHPIOiQ-EMaLlT00c84h_eX99VPEHnfbhmd8g_QbMTD2DuZn0m_8BwJtWBsf2zFBxbBKH0nDdtDNHq2B1HMAhzA4P9VyHNuG8y7EkxM5eFE-afozKHpF&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 10,
        "title": "Nescau, Achocolatado Em Pó Light, 400g",
        "link": "https://www.casasbahia.com.br/achocolatado-em-po-nescau-light-400g-1542975558/p/1542975558?utm_medium=Cpc&utm_source=google_freelisting&IdSku=1542975558&idLojista=200725&tipoLojista=3P",
        "product_link": "https://www.google.com.br/shopping/product/16490056990829271288?gl=br",
        "product_id": "16490056990829271288",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=16490056990829271288",
        "source": "Casas Bahia",
        "price": "R$ 8,69",
        "extracted_price": 8.69,
        "rating": 3.3,
        "reviews": 3,
        "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTehhFnqz8OpTdfBXc2oeweekXm0_90jcANoErTuj-Jzbv5aNJNTZR1BbgDTFWNN5zDwfe9dvcWCNGH37aIFWQxqGv5F5xoQcSox-c-ZJLX3S6yMBmc9nIq&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 11,
        "title": "Bolsa Nescau | Nestle",
        "link": "https://www.enjoei.com.br/p/bolsa-nescau-73565520?g_campaign=google_shopping",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:3756642266936535321",
        "product_id": "3756642266936535321",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=3756642266936535321",
        "source": "Enjoei.com",
        "price": "R$ 6,57/mês",
        "extracted_price": 6.57,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcThBTzDSAVAzV129w4NHZ1ZbXig1z606CgZn-qPjzS0XQ0jKfHUgZX1r-UaSMmVCtmxkWHDcBPF30ZXugZ75EYPlB9pOuyBtW_y0HFDNo4&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 12,
        "title": "Nescau Prontinho 200ml",
        "link": "https://www.lojadedoces.com.br/produto/nescau-prontinho-200ml/3313647/?srsltid=AdGWZVQDcE6WL2-tha_q2qCguRh9TCxWxzBfgfi0WoV1ZIAqoR-h4VSsirI",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:16562905036226439550",
        "product_id": "16562905036226439550",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=16562905036226439550",
        "source": "Bom Baiano",
        "price": "R$ 2,39",
        "extracted_price": 2.39,
        "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRWnGW8UBtBQs0NbJ3Qsa25SeH63oZJXTNauyS6rnNlDpD-EIAAU3hUwjAbH7f6m0-3wtah5qM70pWVQg0bU-PgnvZOpxtpGaEUF1cAFNctzAMx0H3Gzm5D9Q&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 13,
        "title": "Nescau Cereal Matinal 770g",
        "link": "https://www.pontofrio.com.br/cereal-matinal-nescau-tradicional-770g-1543099075/p/1543099075?utm_medium=cpc&utm_source=google_freelisting&IdSku=1543099075&idLojista=200725&tipoLojista=3P",
        "product_link": "https://www.google.com.br/shopping/product/8218935077356312560?gl=br",
        "product_id": "8218935077356312560",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=8218935077356312560",
        "source": "Pontofrio.com",
        "price": "R$ 20,24",
        "extracted_price": 20.24,
        "rating": 4.9,
        "reviews": 13,
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTEjVGyAEnkKnXt0Xa4KvJabTzoY9ojJ8Z1mY6KSZcD1XppKY7QbAvy9dSXwjCVKIhdSLu1drad-qVgvr-0vAR2TCthtVP7WMt34-aqED2WBGaCEYAses12UQ&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 14,
        "title": "Nescau Em Po Nestle Achocolatado Pacotão Com 2kg Econômico NoBrand2KG",
        "link": "https://shopee.com.br/Nescau-Em-Po-Nestle-Achocolatado-Pacot%C3%A3o-Com-2kg-Econ%C3%B4mico-i.299223934.4590246056",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:17184489931460922295",
        "product_id": "17184489931460922295",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=17184489931460922295",
        "source": "Shopee",
        "price": "R$ 42,12",
        "extracted_price": 42.12,
        "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRNZ_botvqL1d3ndRh9BMq0bmJnHHHGmT0E1Pv8SCo1GZG3_-SgwZ_-vTwQWGS3rKDdpnTCmFMQhGbI5VN0vMwul7ISMtUnP39hF2GeTZUAB1HzkxqCebfR&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 15,
        "title": "Bebida Láctea Nescau Prontinho 200ml - Caixa Com 30 Unidades",
        "link": "https://www.submarino.com.br/produto/5452553343?opn=XMLGOOGLE&offerId=62d57edcd4af6a4f944dd2f2",
        "product_link": "https://www.google.com.br/shopping/product/6539935677280858111?gl=br",
        "product_id": "6539935677280858111",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=6539935677280858111",
        "source": "Submarino",
        "price": "R$ 136,91",
        "extracted_price": 136.91,
        "extensions": [
          "Fermentado/cultivado"
        ],
        "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbJL-OSQECh4s2_ZQDDIsgE_H_B42-nOi-GZR6mMIKGxOM1SWxn2BEBopF2UjsN5Z8RD4ruogFtNnhvtm7X9dQcW0aQKviNNgn-jGbB5pKQzVseiHPi2AgbQ&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 16,
        "title": "Achocolatado nescau nestle 2.0 1,2KG",
        "link": "https://www.americanas.com.br/produto/4936714502?opn=YSMESP&offerId=625dadb587c00289c2f6b9d9&srsltid=AdGWZVR-L2PDPIQR7uQtX6fQYWEBEWTOWcPQSxoJN3qG3vp5cR4CyqSaBZg",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:6108586452835079727",
        "product_id": "6108586452835079727",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=6108586452835079727",
        "source": "Americanas.com",
        "price": "R$ 32,50",
        "extracted_price": 32.5,
        "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSIW-ATsY-IG_0Yhp8H0ASwGSdjWGnio8y7B1zluSKgW-7ECA2GTBP4vWGkAWtdyOfthBN-oonyxRlbzXY9lLDGSdmTSTqUy5J87tLffA1n&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 17,
        "title": "Kit Com 03 Achocolatado Nescau 400g Pote - Nescal",
        "link": "https://www.shoptime.com.br/produto/2018583831?opn=GOOGLEXML&offerId=5f4f7c4aac4d983c8787b127",
        "product_link": "https://www.google.com.br/shopping/product/8819786620460504333?gl=br",
        "product_id": "8819786620460504333",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=8819786620460504333",
        "source": "Shoptime",
        "price": "R$ 25,76/mês",
        "extracted_price": 25.76,
        "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQsFIrGRScp0zu8Nbrib9AuIFfr1CMc4DRuE-OKMbojma5OziNqqCngDYWHuF5Ew7kFQj_q9xzL990gMe-uLsB-WixAPHgm_KWC2mZByyFgASh-J4DwPe4X&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 18,
        "title": "Achocolatado Nescau Sachê 550g",
        "link": "https://loja10.bistek.com.br/achoc-nescau-550g-sache.html?utm_source=google_shopping",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:7234381711473685579",
        "product_id": "7234381711473685579",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=7234381711473685579",
        "source": "Bistek Supermercados",
        "price": "R$ 12,29",
        "extracted_price": 12.29,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTO5G_JIVooNUXN2WatYauA5jdqdpyhUZ8rN1aXyqzRGfJEU32llVkmY0LS1ibyTtBtCcYQ-5lhb7zc8vQnIyIXpDkxRVQZjOchoO44r2Yij_yBwj_l9q6W&usqp=CAE",
        "delivery": "Entrega grátis e devolução grátis em até 7 dias"
      },
      {
        "position": 19,
        "title": "Achocolatado Nescau 730g Em Pó Pronta Entrega",
        "link": "https://produto.mercadolivre.com.br/MLB-2217064908-achocolatado-nescau-730g-em-po-pronta-entrega-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic",
        "product_link": "https://www.google.com.br/shopping/product/18275268433403842916?gl=br",
        "product_id": "18275268433403842916",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=18275268433403842916",
        "source": "Mercado Livre",
        "price": "R$ 6,63/mês",
        "extracted_price": 6.63,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRuTPBVZkCboz1PsCYENc_9PZuK086zPkEaVZFUOtfHHzHnNaHeFqtlEyMTaZRmgvTJmoe70qGUEjIAz8eh5vyPL6WyK8NoxkoFkKtja6Fop2FXj5GD1pSCkg&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 20,
        "title": "Achocolatado Em Pó Nescau 370g",
        "link": "https://www.superpaguemenos.com.br/achocol-nescau-370g-lt-liga-nescau/p?googleshopping=1",
        "product_link": "https://www.google.com.br/shopping/product/13497027044580079061?gl=br",
        "product_id": "13497027044580079061",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=13497027044580079061",
        "source": "Super Pague Menos",
        "price": "R$ 8,79",
        "extracted_price": 8.79,
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRCqVc1TnoJnWDRjs_QQt8yGpFrgEPjMQoACiL4S5Pnc8fn-YQdkaARYxdQs0MGxmgIjXar8XvewDf7D1BcPZ3qJ8xCTfE725O2wM5y3RSxwsEpEnoKSoNdkg&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 21,
        "title": "Achocolatado Em Pó Nescau 2.0 - 200g",
        "link": "https://www.paodeacucar.com/produto/469?storeId=501&isGoogleShopping=true",
        "product_link": "https://www.google.com.br/shopping/product/16718721226933076685?gl=br",
        "product_id": "16718721226933076685",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=16718721226933076685",
        "source": "Pão de Açúcar",
        "price": "R$ 5,69",
        "extracted_price": 5.69,
        "rating": 4.5,
        "reviews": 10,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTreeFtJRA-MuGBTZyL52lJN1J1FYHunEQIPM9HFmivyEn72VSR1hJCXy1LJxUVwPCBwwEt5uKGa-azAAvqMJ6SA4ML0ngdDV8WS-QFc_IEWMHTsyJx0I1wVg&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 22,
        "title": "Achocolatado NESCAU Chocolate Branco 180g Edição Limitada",
        "link": "https://www.angeloni.com.br/super/p/achocolatado-nescau-chocolate-branco-180g-edicao-limitada-4793721?gclid=googleshopping&pStoreId=14",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:12125784776794525038",
        "product_id": "12125784776794525038",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=12125784776794525038",
        "source": "Angeloni Super",
        "price": "R$ 11,90",
        "extracted_price": 11.9,
        "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTVJfL4EGcs8u_VRpdEcFlBAp0Hjp4reIiuj7OHFqaAXN_rWtGzQGWJGvGpiNmX1Kxu2mU1iZf_M98T_H6jlOw8Bi86mGxazw&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 23,
        "title": "Achocolatado em Pó Nescau Nestlé 370G",
        "link": "https://jadoces.com.br/p/achocolatado-em-po-nescau-nestle-400g/",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:4152735974672370195",
        "product_id": "4152735974672370195",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=4152735974672370195",
        "source": "J.A. Doces",
        "price": "R$ 6,80",
        "extracted_price": 6.8,
        "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTfJRIVArh1cVcqKBQF_erhiyjr5ZrB0rnxCCjEdlmPbRNWegpYrUE9JQoJXhPBNRmFEmGm-1G649oQQHgGOty0erbuypl7dXigPXHDLdqWxXbUINth8hJb3Q&usqp=CAE",
        "delivery": "Entrega de R$ 16,45"
      },
      {
        "position": 24,
        "title": "Achocolatado Nescau 350 Gramas Nestle Kit 5",
        "link": "https://www.extra.com.br/kit-5-achocolatado-nescau-350-gramas-nestle-1535545258/p/1535545258?utm_medium=cpc&utm_source=google_freelisting&IdSku=1535545258&idLojista=12231&tipoLojista=3P",
        "product_link": "https://www.google.com.br/shopping/product/2592764391732013523?gl=br",
        "product_id": "2592764391732013523",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=2592764391732013523",
        "source": "Extra.com.br",
        "price": "R$ 28,84/mês",
        "extracted_price": 28.84,
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQy411aXIhVYgALIrB4tX4SHgqneDGWPNynyShWKK99Qli-MgO6UD5E126zJxwE0f_WDZZOjmFD09eKNqkqSH7ehqRyNCg1PPtT190PQJHuZuJAdP1v4ZO4&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 25,
        "title": "Bebida Lactea Nestle Nescau 200ml",
        "link": "https://www.lojanovamix.com.br/bebida-lactea-nestle-nescau-200ml-7891000379103/p?idsku=798",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:15171032063956131024",
        "product_id": "15171032063956131024",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=15171032063956131024",
        "source": "Loja Novamix",
        "price": "R$ 1,99",
        "extracted_price": 1.99,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQhvX1gD0ubnyROO70kpjr01_U4tV8kmLf2vYJ1ToUsa-o7vMYRJc5mY9UPmtOU-JMD6lGW9rEFSZKdUNPTtFC0WlyWz2CReUjTKXShrWXEiXRC7yFxjRJPbQ&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 26,
        "title": "Achocolatado em Po NESCAU Branco 180g",
        "link": "http://www.sondadelivery.com.br/delivery/produto/achocolatado-em-po-nescau-branco-180g/1000041755",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:1472818508120853027",
        "product_id": "1472818508120853027",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=1472818508120853027",
        "source": "Sonda Supermercados",
        "price": "R$ 11,54",
        "extracted_price": 11.54,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRM4RLPKwrxdaEtyMmuPd-X5uxNNxUSI0kUQOnYeCzbulpkoiWPZ1VgCgF9s_pleCUrrScHTdUz_wco0ZzX-Z193w878p-4sQ&usqp=CAE",
        "delivery": "Entrega de R$ 14,90"
      },
      {
        "position": 27,
        "title": "Biscoito Cookie Nescau Duo Nestlé 60g",
        "link": "https://www.redecomprasdelivery.com.br/produtos/detalhe/18484?srsltid=AdGWZVTdYPSzSOfcFUACE7_YT4Q7FhmdPvyBVOywrKQoIrB35ClOLXuVgi0",
        "product_link": "https://www.google.com.br/shopping/product/6899801052665153297?gl=br",
        "product_id": "6899801052665153297",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=6899801052665153297",
        "source": "redecompras.com",
        "price": "R$ 2,95",
        "extracted_price": 2.95,
        "extensions": [
          "Amanteigado",
          "Fresco"
        ],
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTqREZjrGx8MFD4cZAQYK4oC2D7O3rQjHWoWZLHzPS4Gdqq-EG9y5y0PscdUwMgsiWfO9K5dxiz6T4NgB6rnQeQO3KD2MTBjpmYTybGIWBjuaBqAD8ziCC5&usqp=CAE",
        "delivery": "Entrega de R$ 11,90"
      },
      {
        "position": 28,
        "title": "Achocolatado Nescau Em Pó 3 Kg",
        "link": "https://www.ndays.com.br/nescau-3kg",
        "product_link": "https://www.google.com.br/shopping/product/12061872930793346022?gl=br",
        "product_id": "12061872930793346022",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=12061872930793346022",
        "source": "Ndays Consumo Imediato",
        "price": "R$ 84,00",
        "extracted_price": 84.0,
        "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRGYciCxmr6unRA0UtXj4sqiLIizMrlKri1kB3LVNyLvoAVrQbBEL-4qbfKa9hA-wHd3ev16nVR8hmcjsH2HkbNUWp3u44r99Bh7codNaXfV0hWIM-XEU6T&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 29,
        "title": "Kit Achocolatado Em Pó Nescau Nestlé 370Gr Lata Com 12 Unida",
        "link": "https://www.carrefour.com.br/kit-achocolatado-em-po-nescau-nestle-370gr-lata-com-12-unida-mp924778930/p",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:1568364176328700903",
        "product_id": "1568364176328700903",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=1568364176328700903",
        "source": "Carrefour",
        "price": "R$ 51,63/mês",
        "extracted_price": 51.63,
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9uvP4VlnHocBnXXiwZM1EZEce3434Q3BEzLpNXNRVcAAX83pzi3QZFmp-ptJu0gNtuT129rr0sqhWAVgzE0Q1HpEeNf5u5RGF_KCguM0&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 30,
        "title": "Bebida Láctea Nescau 270ml",
        "link": "https://www.marche.com.br/produtos/bebida-lactea-nescau-fast-270ml",
        "product_link": "https://www.google.com.br/shopping/product/9648353532687607406?gl=br",
        "product_id": "9648353532687607406",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=9648353532687607406",
        "source": "St Marche",
        "price": "R$ 5,49",
        "extracted_price": 5.49,
        "rating": 5.0,
        "reviews": 2,
        "extensions": [
          "Bebida láctea",
          "Chocolate"
        ],
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbqB4jV_fWjRKwQXH13lagdF13UmNI7kFlLaCjIKnNfFVr_-z9JMQ12PN-KeDtyun1pjagoY-xpQO4-bQIhfR8ZUu2Q9YnFqqRkb-d9oCULc0iLq87_awlfQ&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 31,
        "title": "Achocolatado em Pó NESCAU 180g Nestle",
        "link": "https://shopee.com.br/Achocolatado-em-P%C3%B3-NESCAU-180g-i.340585170.17062107135",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:1754323563139753464",
        "product_id": "1754323563139753464",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=1754323563139753464",
        "source": "Shopee",
        "price": "R$ 12,99",
        "extracted_price": 12.99,
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRJh8JmAnSKDKL-xp3hG_iJxjc4OFQdUvP0SMXhYCL84QNDjQFlP53lFPlNZHlXgcd11SqKls7kG9F7ld6QdHhHJXMNaLRhsVPjAnbICt6bDaBQ-wyaVGu2Vw&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 32,
        "title": "Nescau Achocolatado 2kg Nestlé",
        "link": "https://produto.mercadolivre.com.br/MLB-2718845062-achocolatado-nescau-fator-crescer-370g-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic",
        "product_link": "https://www.google.com.br/shopping/product/16773654099453858442?gl=br",
        "product_id": "16773654099453858442",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=16773654099453858442",
        "source": "Mercado Livre",
        "price": "R$ 10,99",
        "extracted_price": 10.99,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQiTsQrGXSmNkYq-9VUXf9Ozh_Tau2R9dyiM7Rg1YuX77Q8NFsgh3YE7l0tGBAokq4XwyptuGza4e0p9wcP1yoPG0qQQpJbH-vcPr0GhIxacQbDj2_obD13yiJr&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 33,
        "title": "Nescau | Latas De Nescau - Unidade | Usado",
        "link": "https://www.enjoei.com.br/p/latas-de-nescau-unidade-71245737?g_campaign=google_shopping",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:4869176861409359853",
        "product_id": "4869176861409359853",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=4869176861409359853",
        "source": "Enjoei.com",
        "price": "R$ 8,47/mês",
        "extracted_price": 8.47,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQS_J8oMub7LoXEewF5p5qG0soXVi-Rw1G7KWm8tJzJJbl9Zy5CP3aau1MdlUUsWjEtKBCmSwYiNWo8HbtTV7lkBDSo-eMZOkfpJp8T9Ms&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 34,
        "title": "Nescau Ball Edição Limitada C/12 75G - Nestle",
        "link": "https://www.dijosdoces.com.br/produtos/nescau-ball-edicao-limitada-c-12-75g-nestle/?pf=gs",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:3404745634463051948",
        "product_id": "3404745634463051948",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=3404745634463051948",
        "source": "Dijos Doces",
        "price": "R$ 71,75",
        "extracted_price": 71.75,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR0C4Jl6Z-ZgiALGLSu5LGisEPjoRzrc1WDXYt6eymdp0ztzEqY8kQptsLSwAhMj3qwCuJqjdDbFBnGe4FNzQHac_FGakoyQKIgIHGZoLQyUle5ZqPgaBBY&usqp=CAE",
        "delivery": "Entrega de R$ 30,00"
      },
      {
        "position": 35,
        "title": "Achocolatado Em Pó Nescau Canela 180g - Nestlé",
        "link": "https://www.superjose.com.br/p/Achocolatado-Po-Nescau-Canela-180G?srsltid=AdGWZVSavUCKSD7GbTMD3llyET-djuTK1NMK8N_tdKjoONyjDAfhFlC_OwI",
        "product_link": "https://www.google.com.br/shopping/product/5120644704538838071?gl=br",
        "product_id": "5120644704538838071",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=5120644704538838071",
        "source": "Super José",
        "price": "R$ 10,39",
        "extracted_price": 10.39,
        "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_XCJ3XgE2bB4SNnf1EaVY_U1a2K-Gzczzy23caOt-eQTwtqHZNiRY0a42PuyZ06qu-iI7qAZRi5OtnOkT5Dwlt0MmhlPy59rLHU110efBMRN_XCYCmfHX&usqp=CAE",
        "delivery": "Entrega gratuita"
      },
      {
        "position": 36,
        "title": "Nescau Ball contendo 12 pacotes de 75g cada",
        "link": "https://www.chocofesta.com.br/marcas/nescau/nescau-ball-contendo-12-pacotes-de-75g-cada?parceiro=6979",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:11320528228777279745",
        "product_id": "11320528228777279745",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=11320528228777279745",
        "source": "Chocofesta",
        "price": "R$ 98,99",
        "extracted_price": 98.99,
        "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnFAv-DNNgiEeFibG8c3MG6G0MvulMf5iXd7vzXOVgu8qiy_njrXO5F42NAZtyg7Evk-ulj_QFc-ul9xZJGQV66OxYMW5oE28YIZc-nhHCYuV2Lwq3KxGd&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 37,
        "title": "Kit 3 latas Nescau 2.0 Actigen-E Achocolatado em Pó 400g - Nestlé",
        "link": "https://www.americanas.com.br/produto/1624064731?opn=YSMESP&offerId=5e912e8f79bf8430cb3e6feb&srsltid=AdGWZVSedy9ScwoVz2dRSolO6eH0lhyXbZGaz3HFUV3yMcQDxIWt-ZpP2Fg",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:2613929084138240169",
        "product_id": "2613929084138240169",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=2613929084138240169",
        "source": "Americanas.com",
        "price": "R$ 36,40",
        "extracted_price": 36.4,
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8AjiAhKBWRAc6d3Q64MI2fANzE89OGsX1pmmPvz59NwxislBxr3ENdzxdCKikzhmaAFTOZZvTgFKrELBLMTLzgvDQcsL4pC-ru7KHe7BB&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 38,
        "title": "Achocolatado Nestle Nescau 3.0 380g",
        "link": "https://supertem.com.br/loja/achoc-nestle-nescau-3-0-380g/",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:8233525488234943912",
        "product_id": "8233525488234943912",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=8233525488234943912",
        "source": "Supertem",
        "price": "R$ 10,99",
        "extracted_price": 10.99,
        "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSZiL7mYHyaPlcZEg0OIJKU9XgFPOYNYGmUtUNiDEWetIDRM4qQ4HFsI_uistRPOzKjG4Vi7NL5Q27ak9IvW2isGGeR7lZw0mnfgPV0eHxy_U7UZNBUwtBp&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 39,
        "title": "Achocolatado Nescau 200gr",
        "link": "https://www.magazineluiza.com.br/achocolatado-nescau-200gr/p/bg8h8ada2a/me/achl/?&seller_id=gnconfeitaria",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:14232236283519930211",
        "product_id": "14232236283519930211",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=14232236283519930211",
        "source": "Magazine Luiza",
        "price": "R$ 5,87",
        "extracted_price": 5.87,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScc3vCccBk69jzVEPDOvBpdRLS3DngrID_d4VFhz4zfJ0rn9F1TxjyoVW-ByembU-lAAJitrmVWggLQiryRGgOhpjSDl2EMdqc2OnITO3aEbLLyeun7IlK&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 40,
        "title": "Achocolatado (30 UNID) Nescau 370g",
        "link": "https://www.qualycestas.com.br/achocolatado--30-unid--nescau-370g/p?idsku=337",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:6098145490527754291",
        "product_id": "6098145490527754291",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=6098145490527754291",
        "source": "QualyCestas",
        "price": "R$ 86,63/mês",
        "extracted_price": 86.63,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgznxu6EcHV4ydCZNPgD4L2dMFKF-EkqD6GXOShlo-872R_zjFElQsNEAIpLd3LL2PCiCmqi8ajYgYJq-UOwhQt9pgooS_rA&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 41,
        "title": "Biscoito Nescau Recheado 140g- Nestlé",
        "link": "https://www.paguemenos.com.br/biscoito-nescau-recheado-140g/p?idsku=64512",
        "product_link": "https://www.google.com.br/shopping/product/9084700997970094582?gl=br",
        "product_id": "9084700997970094582",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=9084700997970094582",
        "source": "Farmácias Pague Menos",
        "price": "R$ 4,49",
        "extracted_price": 4.49,
        "extensions": [
          "Amanteigado",
          "Fresco"
        ],
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTSLeeVEbQ00QPP8VkMWJtdVIw5OBsA4Xoqgo9kAzQP1iqX9JVjXGlpMbn4KGGPMUOAhj9u52AiS9gINDta3qSU3mCcVGvzeB0LLcOmvMvdwjE47PtTOfHqDg&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 42,
        "title": "Achocolatado Nescau Duo 180g",
        "link": "https://www.jordaosupermercado.com.br/loja/vitrini/www.jordaosupermercado.com.br/0/137437",
        "product_link": "https://www.google.com.br/shopping/product/18373217482890726643?gl=br",
        "product_id": "18373217482890726643",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=18373217482890726643",
        "source": "Jordão Supermercado",
        "price": "R$ 10,90",
        "extracted_price": 10.9,
        "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQDyDpd4i1kHttlMUfhNxHV1HA1_3ZizAOi3_EyhCXmb_opFmv-MIXIzVVof1sUDLQwaLp4loAlODDauHymVgQhUTWKhj3RkYRpT1dEvEVE5GbqgvYKaTfbWw&usqp=CAE",
        "delivery": "Entrega gratuita"
      },
      {
        "position": 43,
        "title": "Chocolate Nescau 90g",
        "link": "https://www.havan.com.br/barra-de-chocolate-nescau-nestle-diversos/p",
        "product_link": "https://www.google.com.br/shopping/product/8098211222376660170?gl=br",
        "product_id": "8098211222376660170",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=8098211222376660170",
        "source": "Havan",
        "price": "R$ 5,99",
        "extracted_price": 5.99,
        "extensions": [
          "Chocolate ao leite"
        ],
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSVW4uz9jNuMdChl8Bo_UmsXhCh6o7XM2Y9ABZcAnH8tLMx0jYiFKOOprb8qHGpfHSCiMs8039qk8kdOQDMImuq3DYTS6CySujsacvWIquBBc66-LDHewF2Cw&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 44,
        "title": "Achocolatado Nescau 2.0 Lata 200G",
        "link": "https://www.superuniaobq.com.br/product-page/achocolatado-nescau-2-0-lata-200g?srsltid=AdGWZVRBFRc5374JGqm5qd0zTzRP45-mr3MLwStVoJQF2neBWvSiK4EonNg",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:812941214830373769",
        "product_id": "812941214830373769",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=812941214830373769",
        "source": "supermercado união",
        "price": "R$ 4,99",
        "extracted_price": 4.99,
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQR9l7eYlrDLpq4k4h7SOAE7MpLFPOahBwWE7xRLOm6FAn9XkpTv58W-Pxtf_rFkBHyfaXYSmOhZNqhK7LodWEujJpAIaBxwQ&usqp=CAE",
        "delivery": "Entrega de R$ 15,00"
      },
      {
        "position": 45,
        "title": "Achocolatado Nescau 400g",
        "link": "https://www.ifrutus.com.br/produto/achocolatado-nescau-400g-71926?utm_source=&utm_medium=&utm_campaign=",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:5747329658644768059",
        "product_id": "5747329658644768059",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=5747329658644768059",
        "source": "iFrutus",
        "price": "R$ 12,99",
        "extracted_price": 12.99,
        "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR54Ze8mETeYAYplkdVcYHLTUIAswl5QuGbkVZkMNVZ7h0T87B7nvjXNFht1AOdtCuQ9MyR4OgImXMm7Oe_xC13u3C8nQ4LUA&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 46,
        "title": "Achocolatado Nescau Max Cereal 165g 0% Adição de Açúcares Lata Edição Limitada Nestle",
        "link": "https://shopee.com.br/Achocolatado-Nescau-Max-Cereal-165g-0--Adi%C3%A7%C3%A3o-de-A%C3%A7%C3%BAcares-Lata-Edi%C3%A7%C3%A3o-Limitada-i.296858075.17964025272",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:2739024973906140819",
        "product_id": "2739024973906140819",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=2739024973906140819",
        "source": "Shopee",
        "price": "R$ 18,90",
        "extracted_price": 18.9,
        "extensions": [
          "Sem açúcar adicionado"
        ],
        "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-AF_coHw9TwfHLgDk4TZZb2p9jU4inwww6x6NHjqjvTXRqMHuzuOt6vKjKDiFZWt9eoKKLflCgCvwYA2zqYPIldx9687YWlZdG8Zwd5Zx58rqSoGE0o24&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 47,
        "title": "Achocolatado Em Pó Nescau Max 165 G",
        "link": "https://www.docevidadiabetes.com.br/produtos-diet/achocolatado-diet-cafe-diet-shake-sem-acucar/achocolatado-sem-adicao-de-acucar-nescau-max-cereal-nestle-165g.html?fee=1&fep=2160",
        "product_link": "https://www.google.com.br/shopping/product/2716048750176540130?gl=br",
        "product_id": "2716048750176540130",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=2716048750176540130",
        "source": "Doce Vida Diabetes",
        "price": "R$ 17,90",
        "extracted_price": 17.9,
        "rating": 4.6,
        "reviews": 5,
        "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQC_x-oxSrkFPo_w_f0nODL2Q-M1uSN_wGTgMqmVxhIKXOE9C5K-kkoCOwtbq0SYFl519KpzLgX9B_P5_e4AvZ7TO5yagjXGOoLUgm0INSDXpPy6oysM-it&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 48,
        "title": "Achocolatado Em Pó Nescau 2.0 Sachê 800 G",
        "link": "https://www.supermercadonossacasa.com.br/p/Achocolatado-em-Po-Nestle-Nescau-Pacote-800g-Embalagem-Economica",
        "product_link": "https://www.google.com.br/shopping/product/10850277776311489927?gl=br",
        "product_id": "10850277776311489927",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=10850277776311489927",
        "source": "Supermercado Nossa Casa",
        "price": "R$ 13,99",
        "extracted_price": 13.99,
        "rating": 4.6,
        "reviews": 32,
        "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDZlYf0rHwz9YJKfcg3g-Py1dh8dgzxPJJVHmU6Wn0gEyTlIah0gy01hBBt-Dw89QiNHfGzEfiFVIV2fAgqClTAZ5Qf3dgU3AGO5cjg8-5GMTSLPGhyow_&usqp=CAE",
        "delivery": "Entrega de R$ 10,00"
      },
      {
        "position": 49,
        "title": "Achocolatado NESCAU Canela 180g Edição Limitada",
        "link": "https://www.angeloni.com.br/super/p/achocolatado-nescau-canela-180g-edicao-limitada-4793712?gclid=googleshopping&pStoreId=14",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:17979679072951734676",
        "product_id": "17979679072951734676",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=17979679072951734676",
        "source": "Angeloni Super",
        "price": "R$ 11,90",
        "extracted_price": 11.9,
        "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSAx7jilxM0bUlPGJ4hu7_l4-F7_WUXzfa1DPkoQ3V6d7XB6Kzo1LlULKXzI5PMKJemPfT6RJGVtVDw8iHDz796DoyfIycv_g&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 50,
        "title": "Achocolatado Em Pó Nescau 380g",
        "link": "https://www.clubeextra.com.br/produto/374990?storeId=241&isGoogleShopping=true",
        "product_link": "https://www.google.com.br/shopping/product/5521563963418479908?gl=br",
        "product_id": "5521563963418479908",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=5521563963418479908",
        "source": "Clube Extra",
        "price": "R$ 8,38",
        "extracted_price": 8.38,
        "rating": 4.2,
        "reviews": 9,
        "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSnBdsJyRvLOnMZcWouIypfq_8c_aKpgOL58tmxwI0PTfUknWEPOLATwbfXiMrj65-e3Q-3uhL6QbxScsR7WPQdjhJqRak9ObCvKjChlNOxvC_iJcs0bXQW7g&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 51,
        "title": "Nescau Achocolatado Em Pó 370g Kit Com 3 Latas - Promoçao Nestlé",
        "link": "https://produto.mercadolivre.com.br/MLB-2638435774-nescau-achocolatado-em-po-370g-kit-com-3-latas-promocao-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic",
        "product_link": "https://www.google.com.br/shopping/product/177615848485209532?gl=br",
        "product_id": "177615848485209532",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=177615848485209532",
        "source": "Mercado Livre",
        "price": "R$ 32,78",
        "extracted_price": 32.78,
        "rating": 4.5,
        "reviews": 10,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTLAHyeAMOoO9jVfJHZNnERJdY4JPWcaHAAR8WcdeBqZGd4tUs7HdVVELxBZF62h0QaHl09uk1lDbin7ARdCSC2U-es3oVWIL9pyUQJVgJU7pW2uGPyW9LE&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 52,
        "title": "Achocolatado Nescau 2.0 400G",
        "link": "https://redebiomax.com.br/produto/22909/achocolatado-nescau-20-400g?srsltid=AdGWZVTuggbb6EzjyQ6Kx-tIh2V9wJ7a3hds1X0d6rDHwHp_UZGn5TtWcKY",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:4893661254346934067",
        "product_id": "4893661254346934067",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=4893661254346934067",
        "source": "Rede Biomax",
        "price": "R$ 7,69",
        "extracted_price": 7.69,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRTrMZI9GfTNBIx_jUchLq3VujX8TTixB1C9hvH2PzSuph6Lo77vUk63N_Fb3R8E8SolzV__oIFATSfVw7Yp7hbhkmRFoAadZJtbe7KL2Vn&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 53,
        "title": "Kit 6 Achocolatado Em Pó Nescau Nestle Lata 200g",
        "link": "https://www.casasbahia.com.br/kit-6-achocolatado-em-po-nescau-nestle-lata-200g-1510036450/p/1510036450?utm_medium=Cpc&utm_source=google_freelisting&IdSku=1510036450&idLojista=35697&tipoLojista=3P",
        "product_link": "https://www.google.com.br/shopping/product/3612085868841309333?gl=br",
        "product_id": "3612085868841309333",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=3612085868841309333",
        "source": "Casas Bahia",
        "price": "R$ 38,49",
        "extracted_price": 38.49,
        "rating": 4.5,
        "reviews": 10,
        "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS13bWUMnu1N2YNez_2qVF40eIb6T_czlSW7SxSb1S_wEvfDFz4K1SjexmGImdwcGChS61cK3Xu83lDP71Is28tdjav-mxb50toqqb_tZ56RBLrw3l5pEd9&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 54,
        "title": "Achocolatado em Po NESCAU 370g",
        "link": "http://www.sondadelivery.com.br/delivery/produto/achocolatado-em-po-nescau-370g/1000039851",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:4356963414433961706",
        "product_id": "4356963414433961706",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=4356963414433961706",
        "source": "Sonda Supermercados",
        "price": "R$ 8,55",
        "extracted_price": 8.55,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXRxOmHOB-iJWwYUMRuoORXFZ5UslEQyMNP66RWoekAnNX7dwPORNXh6kSinOhch5CHtq8UWRHJjJDv7wcaLMpVw8BHGR3Yg&usqp=CAE",
        "delivery": "Entrega de R$ 14,90"
      },
      {
        "position": 55,
        "title": "Cereal Matinal Nescau 270g",
        "link": "https://www.efacil.com.br/loja/produto/cereal-matinal-nescau-270g-1610700/?canal=ca_9784",
        "product_link": "https://www.google.com.br/shopping/product/17194897150318899247?gl=br",
        "product_id": "17194897150318899247",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=17194897150318899247",
        "source": "eFácil",
        "price": "R$ 8,90",
        "extracted_price": 8.9,
        "rating": 5.0,
        "reviews": 1,
        "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRVHuLSB_EPGUyglezj-6CgIvWf1_MTpLf24eo6O_gYUCb-8ZvLaFh_eG1kHk_ajHDKIJDUU4BByZqdYDhyZmy3VWsZGgWnfCuZ21HbJhJ5e7jtAePhz15n&usqp=CAE",
        "delivery": "Entrega grátis e devolução grátis em até 7 dias"
      },
      {
        "position": 56,
        "title": "Kit Achocolatado Nescau Instantâneo Refil Com Lata 90 Anos - Nescau nestle",
        "link": "https://www.magazineluiza.com.br/kit-achocolatado-nescau-instantaneo-refil-com-lata-90-anos-nescau-nestle/p/akbh4kja96/me/achl/?&seller_id=megashoppingribeirao",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:9118995335029405771",
        "product_id": "9118995335029405771",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=9118995335029405771",
        "source": "Magazine Luiza",
        "price": "R$ 31,99",
        "extracted_price": 31.99,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTCAdakBkLOP12BnE0LiGGW43ZfT-6lnQXUDdz8AeWuFt2HPvO2vCakJBke3gp9kCVrj-GFd3TL1wkWDy2f1o510ouzpNOxgL20knZfVdnB8sEEjbI56IuPfA&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 57,
        "title": "Achocolatado Em Pó Nescau Light 400g",
        "link": "http://drive.supermercadoestrelaazul.com.br/products/achoc-nescau-light-400g?srsltid=AdGWZVRnp0dQkyhij8wMZcP2AjaHbyQmCk0zHmMGZ6ZuhXqxXlRBdhlrSLA",
        "product_link": "https://www.google.com.br/shopping/product/6346792556860238948?gl=br",
        "product_id": "6346792556860238948",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=6346792556860238948",
        "source": "Supermercado Estrela Azul",
        "price": "R$ 13,69",
        "extracted_price": 13.69,
        "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQiBpBUY0ocJNaHf21YAfI45tDC4sdWJwvPnLFXCPuyHa2KglBkQhwSW8c5EetMAynVSlhhvfE8-BEMPv_TCSLarIPkhgMT3XbpYht5jd_gx0Z02CUby7GJ4g&usqp=CAE",
        "delivery": "Frete não incluído"
      },
      {
        "position": 58,
        "title": "Achocolatado Nestlé Nescau 3.0 380g",
        "link": "https://loja10.bistek.com.br/achoc-nescau-380g-3-0.html?utm_source=google_shopping",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:9072604913582719156",
        "product_id": "9072604913582719156",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=9072604913582719156",
        "source": "Bistek Supermercados",
        "price": "R$ 10,99",
        "extracted_price": 10.99,
        "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCr5WeDioRH2xZEh-8vEiU6_y6cHhlL9RMxOzuqp3iXUsVO9LPAO8nhrUo6snWQsAvqAXIFXYeRmAnK2AK8i0PYtOgEx5wbOsVZk7se413a83PzqYYHi6Dkw&usqp=CAE",
        "delivery": "Entrega grátis e devolução grátis em até 7 dias"
      },
      {
        "position": 59,
        "title": "Achocolatado Nescau Canela Lata 180g",
        "link": "https://centralmaxsupermercados.com.br/presidenteepitacio/produto/achocolatado-nescau-canela-lata-180g/",
        "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:5802866092560359484",
        "product_id": "5802866092560359484",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=5802866092560359484",
        "source": "Central Max Supermercados",
        "price": "R$ 9,98",
        "extracted_price": 9.98,
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSWkbH1WFwalweTZOmBMOoAUWWnKKJr2SLP3VOvlmTnTebHrnJdWhxofu62ga82ETeJxNbygIto0JmUKPUgGvbPaWTAlgYL9g1EyvBBpRZUEU5NvmZ5bWWc&usqp=CAE",
        "delivery": "Entrega de R$ 5,00"
      },
      {
        "position": 60,
        "title": "Achocolatado Nescau 350 Gramas - Nestle",
        "link": "https://www.redomma.com.br/achocolatado-nescau-400-gramas-nestle",
        "product_link": "https://www.google.com.br/shopping/product/11396021941067602908?gl=br",
        "product_id": "11396021941067602908",
        "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=11396021941067602908",
        "source": "redomma.com.br",
        "price": "R$ 5,91/mês",
        "extracted_price": 5.91,
        "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR-vt1gIG5g_ABwoye7i5-WjKPpQanewc_4aX4ZArS0pTNHHbiDIsoh9JAsGb4zi4sM1utG5Ry6YlEwkxuyMv6XDpqWNXmDbXBUrCljIXGNW5Y4urvRrbLMag&usqp=CAE",
        "delivery": "Frete não incluído"
      }
    ],
    "pagination": {
      "current": 1,
      "next": "https://www.google.com.br/search?q=nescau&hl=pt&gl=br&tbs=vw:d&tbm=shop&ei=cQ8hY_bOBeSiqtsP2KuI2AI&start=60&sa=N&ved=0ahUKEwi2y_2u85L6AhVkkWoFHdgVAisQ8NMDCN8N",
      "other_pages": {
        "2": "https://www.google.com.br/search?q=nescau&hl=pt&gl=br&tbs=vw:d&tbm=shop&ei=cQ8hY_bOBeSiqtsP2KuI2AI&start=60&sa=N&ved=0ahUKEwi2y_2u85L6AhVkkWoFHdgVAisQ8tMDCM8N",
        "3": "https://www.google.com.br/search?q=nescau&hl=pt&gl=br&tbs=vw:d&tbm=shop&ei=cQ8hY_bOBeSiqtsP2KuI2AI&start=120&sa=N&ved=0ahUKEwi2y_2u85L6AhVkkWoFHdgVAisQ8tMDCNEN",
        "4": "https://www.google.com.br/search?q=nescau&hl=pt&gl=br&tbs=vw:d&tbm=shop&ei=cQ8hY_bOBeSiqtsP2KuI2AI&start=180&sa=N&ved=0ahUKEwi2y_2u85L6AhVkkWoFHdgVAisQ8tMDCNMN",
        "5": "https://www.google.com.br/search?q=nescau&hl=pt&gl=br&tbs=vw:d&tbm=shop&ei=cQ8hY_bOBeSiqtsP2KuI2AI&start=240&sa=N&ved=0ahUKEwi2y_2u85L6AhVkkWoFHdgVAisQ8tMDCNUN",
        "6": "https://www.google.com.br/search?q=nescau&hl=pt&gl=br&tbs=vw:d&tbm=shop&ei=cQ8hY_bOBeSiqtsP2KuI2AI&start=300&sa=N&ved=0ahUKEwi2y_2u85L6AhVkkWoFHdgVAisQ8tMDCNcN",
        "7": "https://www.google.com.br/search?q=nescau&hl=pt&gl=br&tbs=vw:d&tbm=shop&ei=cQ8hY_bOBeSiqtsP2KuI2AI&start=360&sa=N&ved=0ahUKEwi2y_2u85L6AhVkkWoFHdgVAisQ8tMDCNkN",
        "8": "https://www.google.com.br/search?q=nescau&hl=pt&gl=br&tbs=vw:d&tbm=shop&ei=cQ8hY_bOBeSiqtsP2KuI2AI&start=420&sa=N&ved=0ahUKEwi2y_2u85L6AhVkkWoFHdgVAisQ8tMDCNsN",
        "9": "https://www.google.com.br/search?q=nescau&hl=pt&gl=br&tbs=vw:d&tbm=shop&ei=cQ8hY_bOBeSiqtsP2KuI2AI&start=480&sa=N&ved=0ahUKEwi2y_2u85L6AhVkkWoFHdgVAisQ8tMDCN0N"
      }
    },
    "serpapi_pagination": {
      "current": 1,
      "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&q=nescau&start=60&tbm=shop&tbs=vw%3Ad",
      "next": "https://serpapi.com/search.json?device=desktop&engine=google&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&q=nescau&start=60&tbm=shop&tbs=vw%3Ad",
      "other_pages": {
        "2": "https://serpapi.com/search.json?device=desktop&engine=google&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&q=nescau&start=60&tbm=shop&tbs=vw%3Ad",
        "3": "https://serpapi.com/search.json?device=desktop&engine=google&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&q=nescau&start=120&tbm=shop&tbs=vw%3Ad",
        "4": "https://serpapi.com/search.json?device=desktop&engine=google&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&q=nescau&start=180&tbm=shop&tbs=vw%3Ad",
        "5": "https://serpapi.com/search.json?device=desktop&engine=google&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&q=nescau&start=240&tbm=shop&tbs=vw%3Ad",
        "6": "https://serpapi.com/search.json?device=desktop&engine=google&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&q=nescau&start=300&tbm=shop&tbs=vw%3Ad",
        "7": "https://serpapi.com/search.json?device=desktop&engine=google&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&q=nescau&start=360&tbm=shop&tbs=vw%3Ad",
        "8": "https://serpapi.com/search.json?device=desktop&engine=google&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&q=nescau&start=420&tbm=shop&tbs=vw%3Ad",
        "9": "https://serpapi.com/search.json?device=desktop&engine=google&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&q=nescau&start=480&tbm=shop&tbs=vw%3Ad"
      }
    }
  }


export const products = [
    {
      "position": 1,
      "title": "Achocolatado Em Pó 400g Nescau",
      "link": "https://www.magazineluiza.com.br/achocolatado-em-po-nescau-original-400g-nestle/p/cb8g4d92ge/me/achl/?&seller_id=mercadotaismani",
      "product_link": "https://www.google.com.br/shopping/product/4802297811542009748?gl=br",
      "product_id": "4802297811542009748",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=4802297811542009748",
      "source": "Magazine Luiza",
      "price": "R$ 7,83",
      "extracted_price": 7.83,
      "rating": 4.7,
      "reviews": 77,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQv3hrWJgd5PCXQGGWhB4TvgPw-5J227YfcqBA4-ktVQIu8apKDn77aKJ9F926ulBr7IL9Hn9j16H_z3HZpn0CzAw9oa03wl_pMJBsNUmk5_jU391ZaqmSv&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 2,
      "title": "Nescau achocolatado em pó nescau - vários tamanhos NoBrand",
      "link": "https://shopee.com.br/Nescau-achocolatado-em-p%C3%B3-nescau---v%C3%A1rios-tamanhos-i.427349430.17423299721",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:9454633239387306679",
      "product_id": "9454633239387306679",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=9454633239387306679",
      "source": "Shopee",
      "price": "R$ 7,99",
      "extracted_price": 7.99,
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSdT9PWH6awdKzrES0rPIxlgwrSEzR6oeu5HI3BEm5VpIFyvmKtmz3hglQUNjYzCTqhLukp8mDwYs8jw1plKQ-Wdx7CBYmc&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 3,
      "title": "Achocolatado Nescau Activ-Go 335g",
      "link": "https://www.americanas.com.br/produto/5673972605?opn=YSMESP&offerId=62fcffddadbc5f39b9bf668f&srsltid=AdGWZVTxuGNLC61I_q4jafYvDJ8MHpJqSev1_xz9ajRpxDjUcJvz4g5Cxmg",
      "product_link": "https://www.google.com.br/shopping/product/11708914069133501622?gl=br",
      "product_id": "11708914069133501622",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=11708914069133501622",
      "source": "Americanas.com",
      "price": "R$ 6,07",
      "extracted_price": 6.07,
      "rating": 4.6,
      "reviews": 32,
      "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSa0h_xBQMND5a4MVrmW7Zpv_325M6YIcEOl7-GDmoUlVFUgHCEm4hboKujVZQ73RADuDXP_43clje9v33N4HrjC35bIdeT29OtZYQ5gXFpWHn6B5K0LvAF&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 4,
      "title": "Nescau",
      "link": "https://www.magazineluiza.com.br/nescau/p/abj8h52j13/md/otmd/?&seller_id=santinomercado",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:7217616108295026973",
      "product_id": "7217616108295026973",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=7217616108295026973",
      "source": "Magazine Luiza",
      "price": "R$ 10,00",
      "extracted_price": 10.0,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSvtXJrbgvJ0h2EtHdDwS-vmhv3n2Fpb_uSmcG-hG4ilDSZ-2bTx0tMsjHIJnaCRMeZoZ1BqxaHLxzCIizfem_oj-EibNWoFe5SSx7LlexFUo98F3Kgn1q8uQ&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 5,
      "title": "Achocolatado Em Pó Nescau 2 Kg",
      "link": "https://www.tendaatacado.com.br/produto/Achocolatado-em-Po-Nescau-2kg-17769",
      "product_link": "https://www.google.com.br/shopping/product/10210873752792551001?gl=br",
      "product_id": "10210873752792551001",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=10210873752792551001",
      "source": "Tenda Atacado",
      "price": "R$ 27,50",
      "extracted_price": 27.5,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTFeagcPLPHDYD1deVD-L__tFf3bM53iImQf85Sdz-rXUkEx4TvM3PjT5D2HN2sWBcb_fNRTsj3PpwswKYBjoTcUp2XjBYmo7Xk-4BQVDGFfrsWqDdd6kuN&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 6,
      "title": "Achocolatado Em Pó Nescau 730 G",
      "link": "https://www.mambo.com.br/achocolatado-nescau-embalagem-economica-sache-730g/p?idsku=166&srsltid=AdGWZVThcEDpH7DhoPZH-zGCORgJqochmA7goSy-l1qsHPVV7CU_K_T7Q88",
      "product_link": "https://www.google.com.br/shopping/product/10106997689313874774?gl=br",
      "product_id": "10106997689313874774",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=10106997689313874774",
      "source": "Mambo Delivery",
      "price": "R$ 14,98",
      "extracted_price": 14.98,
      "rating": 5.0,
      "reviews": 3,
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQW0jyKMhj76BxTClqL9GJu6rCK8vxyv-Z3c3EhbYKL4ZjIbg_jwSYJDpUhlgaAWP6G6_0sr7ajERpyCZmiplxGqXewydm5TJL4OiaqRfA&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 7,
      "title": "Achocolatado Nescau Chocolate Branco, Duo, Canela ou Chocomelo 180g Edição ...",
      "link": "https://shopee.com.br/Achocolatado-Nescau-Chocolate-Branco--Duo--Canela-ou-Chocomelo-180g-Edi%C3%A7%C3%A3o-Limitada-i.296858075.14782371793",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:726748548472922841",
      "product_id": "726748548472922841",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=726748548472922841",
      "source": "Shopee",
      "price": "R$ 19,99",
      "extracted_price": 19.99,
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_mN_L7vrQnorM9WczCoJdN9yjkOOYukh3bt9kpZP6sFmeduGYRFOE86GdA6mOCIEHCEU3o05LwVHMXdSIS4a2QwiNgZZj_J0K12El7b8_GenEp3zDBRdGQQ&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 8,
      "title": "Kit Achocolatado Nescau Instantâneo Refil Econômico Original NESCAU NESTLE ...",
      "link": "https://produto.mercadolivre.com.br/MLB-2705873719-kit-achocolatado-nescau-instantneo-refil-econmico-original-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:10696089261786983666",
      "product_id": "10696089261786983666",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=10696089261786983666",
      "source": "Mercado Livre",
      "price": "R$ 24,99",
      "extracted_price": 24.99,
      "extensions": [
        "PROMOÇÃO"
      ],
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjUCEWuj6Qjkq_-3JavSZfIxfMySylrFtxgys556KIKpgOYtOe8wSPeXJBs8gtisMOPXCEPc3CxWn6BXVI5y30m609knBbj9p00sC1DPb7CAGDI7R6x-6M&usqp=CAE",
      "tag": "PROMOÇÃO",
      "delivery": "Frete não incluído"
    },
    {
      "position": 9,
      "title": "Achocolatado Nescau 350 Gramas Nestle Kit 3",
      "link": "https://www.extra.com.br/kit-3-achocolatado-nescau-400-gramas-nestle-1535545203/p/1535545203?utm_medium=cpc&utm_source=google_freelisting&IdSku=1535545203&idLojista=12231&tipoLojista=3P",
      "product_link": "https://www.google.com.br/shopping/product/8462046042667826489?gl=br",
      "product_id": "8462046042667826489",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=8462046042667826489",
      "source": "Extra.com.br",
      "price": "R$ 37,07",
      "extracted_price": 37.07,
      "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS2PHPIOiQ-EMaLlT00c84h_eX99VPEHnfbhmd8g_QbMTD2DuZn0m_8BwJtWBsf2zFBxbBKH0nDdtDNHq2B1HMAhzA4P9VyHNuG8y7EkxM5eFE-afozKHpF&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 10,
      "title": "Nescau, Achocolatado Em Pó Light, 400g",
      "link": "https://www.casasbahia.com.br/achocolatado-em-po-nescau-light-400g-1542975558/p/1542975558?utm_medium=Cpc&utm_source=google_freelisting&IdSku=1542975558&idLojista=200725&tipoLojista=3P",
      "product_link": "https://www.google.com.br/shopping/product/16490056990829271288?gl=br",
      "product_id": "16490056990829271288",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=16490056990829271288",
      "source": "Casas Bahia",
      "price": "R$ 8,69",
      "extracted_price": 8.69,
      "rating": 3.3,
      "reviews": 3,
      "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTehhFnqz8OpTdfBXc2oeweekXm0_90jcANoErTuj-Jzbv5aNJNTZR1BbgDTFWNN5zDwfe9dvcWCNGH37aIFWQxqGv5F5xoQcSox-c-ZJLX3S6yMBmc9nIq&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 11,
      "title": "Bolsa Nescau | Nestle",
      "link": "https://www.enjoei.com.br/p/bolsa-nescau-73565520?g_campaign=google_shopping",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:3756642266936535321",
      "product_id": "3756642266936535321",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=3756642266936535321",
      "source": "Enjoei.com",
      "price": "R$ 6,57/mês",
      "extracted_price": 6.57,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcThBTzDSAVAzV129w4NHZ1ZbXig1z606CgZn-qPjzS0XQ0jKfHUgZX1r-UaSMmVCtmxkWHDcBPF30ZXugZ75EYPlB9pOuyBtW_y0HFDNo4&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 12,
      "title": "Nescau Prontinho 200ml",
      "link": "https://www.lojadedoces.com.br/produto/nescau-prontinho-200ml/3313647/?srsltid=AdGWZVQDcE6WL2-tha_q2qCguRh9TCxWxzBfgfi0WoV1ZIAqoR-h4VSsirI",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:16562905036226439550",
      "product_id": "16562905036226439550",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=16562905036226439550",
      "source": "Bom Baiano",
      "price": "R$ 2,39",
      "extracted_price": 2.39,
      "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRWnGW8UBtBQs0NbJ3Qsa25SeH63oZJXTNauyS6rnNlDpD-EIAAU3hUwjAbH7f6m0-3wtah5qM70pWVQg0bU-PgnvZOpxtpGaEUF1cAFNctzAMx0H3Gzm5D9Q&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 13,
      "title": "Nescau Cereal Matinal 770g",
      "link": "https://www.pontofrio.com.br/cereal-matinal-nescau-tradicional-770g-1543099075/p/1543099075?utm_medium=cpc&utm_source=google_freelisting&IdSku=1543099075&idLojista=200725&tipoLojista=3P",
      "product_link": "https://www.google.com.br/shopping/product/8218935077356312560?gl=br",
      "product_id": "8218935077356312560",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=8218935077356312560",
      "source": "Pontofrio.com",
      "price": "R$ 20,24",
      "extracted_price": 20.24,
      "rating": 4.9,
      "reviews": 13,
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTEjVGyAEnkKnXt0Xa4KvJabTzoY9ojJ8Z1mY6KSZcD1XppKY7QbAvy9dSXwjCVKIhdSLu1drad-qVgvr-0vAR2TCthtVP7WMt34-aqED2WBGaCEYAses12UQ&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 14,
      "title": "Nescau Em Po Nestle Achocolatado Pacotão Com 2kg Econômico NoBrand2KG",
      "link": "https://shopee.com.br/Nescau-Em-Po-Nestle-Achocolatado-Pacot%C3%A3o-Com-2kg-Econ%C3%B4mico-i.299223934.4590246056",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:17184489931460922295",
      "product_id": "17184489931460922295",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=17184489931460922295",
      "source": "Shopee",
      "price": "R$ 42,12",
      "extracted_price": 42.12,
      "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRNZ_botvqL1d3ndRh9BMq0bmJnHHHGmT0E1Pv8SCo1GZG3_-SgwZ_-vTwQWGS3rKDdpnTCmFMQhGbI5VN0vMwul7ISMtUnP39hF2GeTZUAB1HzkxqCebfR&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 15,
      "title": "Bebida Láctea Nescau Prontinho 200ml - Caixa Com 30 Unidades",
      "link": "https://www.submarino.com.br/produto/5452553343?opn=XMLGOOGLE&offerId=62d57edcd4af6a4f944dd2f2",
      "product_link": "https://www.google.com.br/shopping/product/6539935677280858111?gl=br",
      "product_id": "6539935677280858111",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=6539935677280858111",
      "source": "Submarino",
      "price": "R$ 136,91",
      "extracted_price": 136.91,
      "extensions": [
        "Fermentado/cultivado"
      ],
      "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbJL-OSQECh4s2_ZQDDIsgE_H_B42-nOi-GZR6mMIKGxOM1SWxn2BEBopF2UjsN5Z8RD4ruogFtNnhvtm7X9dQcW0aQKviNNgn-jGbB5pKQzVseiHPi2AgbQ&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 16,
      "title": "Achocolatado nescau nestle 2.0 1,2KG",
      "link": "https://www.americanas.com.br/produto/4936714502?opn=YSMESP&offerId=625dadb587c00289c2f6b9d9&srsltid=AdGWZVR-L2PDPIQR7uQtX6fQYWEBEWTOWcPQSxoJN3qG3vp5cR4CyqSaBZg",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:6108586452835079727",
      "product_id": "6108586452835079727",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=6108586452835079727",
      "source": "Americanas.com",
      "price": "R$ 32,50",
      "extracted_price": 32.5,
      "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSIW-ATsY-IG_0Yhp8H0ASwGSdjWGnio8y7B1zluSKgW-7ECA2GTBP4vWGkAWtdyOfthBN-oonyxRlbzXY9lLDGSdmTSTqUy5J87tLffA1n&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 17,
      "title": "Kit Com 03 Achocolatado Nescau 400g Pote - Nescal",
      "link": "https://www.shoptime.com.br/produto/2018583831?opn=GOOGLEXML&offerId=5f4f7c4aac4d983c8787b127",
      "product_link": "https://www.google.com.br/shopping/product/8819786620460504333?gl=br",
      "product_id": "8819786620460504333",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=8819786620460504333",
      "source": "Shoptime",
      "price": "R$ 25,76/mês",
      "extracted_price": 25.76,
      "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQsFIrGRScp0zu8Nbrib9AuIFfr1CMc4DRuE-OKMbojma5OziNqqCngDYWHuF5Ew7kFQj_q9xzL990gMe-uLsB-WixAPHgm_KWC2mZByyFgASh-J4DwPe4X&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 18,
      "title": "Achocolatado Nescau Sachê 550g",
      "link": "https://loja10.bistek.com.br/achoc-nescau-550g-sache.html?utm_source=google_shopping",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:7234381711473685579",
      "product_id": "7234381711473685579",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=7234381711473685579",
      "source": "Bistek Supermercados",
      "price": "R$ 12,29",
      "extracted_price": 12.29,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTO5G_JIVooNUXN2WatYauA5jdqdpyhUZ8rN1aXyqzRGfJEU32llVkmY0LS1ibyTtBtCcYQ-5lhb7zc8vQnIyIXpDkxRVQZjOchoO44r2Yij_yBwj_l9q6W&usqp=CAE",
      "delivery": "Entrega grátis e devolução grátis em até 7 dias"
    },
    {
      "position": 19,
      "title": "Achocolatado Nescau 730g Em Pó Pronta Entrega",
      "link": "https://produto.mercadolivre.com.br/MLB-2217064908-achocolatado-nescau-730g-em-po-pronta-entrega-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic",
      "product_link": "https://www.google.com.br/shopping/product/18275268433403842916?gl=br",
      "product_id": "18275268433403842916",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=18275268433403842916",
      "source": "Mercado Livre",
      "price": "R$ 6,63/mês",
      "extracted_price": 6.63,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRuTPBVZkCboz1PsCYENc_9PZuK086zPkEaVZFUOtfHHzHnNaHeFqtlEyMTaZRmgvTJmoe70qGUEjIAz8eh5vyPL6WyK8NoxkoFkKtja6Fop2FXj5GD1pSCkg&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 20,
      "title": "Achocolatado Em Pó Nescau 370g",
      "link": "https://www.superpaguemenos.com.br/achocol-nescau-370g-lt-liga-nescau/p?googleshopping=1",
      "product_link": "https://www.google.com.br/shopping/product/13497027044580079061?gl=br",
      "product_id": "13497027044580079061",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=13497027044580079061",
      "source": "Super Pague Menos",
      "price": "R$ 8,79",
      "extracted_price": 8.79,
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRCqVc1TnoJnWDRjs_QQt8yGpFrgEPjMQoACiL4S5Pnc8fn-YQdkaARYxdQs0MGxmgIjXar8XvewDf7D1BcPZ3qJ8xCTfE725O2wM5y3RSxwsEpEnoKSoNdkg&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 21,
      "title": "Achocolatado Em Pó Nescau 2.0 - 200g",
      "link": "https://www.paodeacucar.com/produto/469?storeId=501&isGoogleShopping=true",
      "product_link": "https://www.google.com.br/shopping/product/16718721226933076685?gl=br",
      "product_id": "16718721226933076685",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=16718721226933076685",
      "source": "Pão de Açúcar",
      "price": "R$ 5,69",
      "extracted_price": 5.69,
      "rating": 4.5,
      "reviews": 10,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTreeFtJRA-MuGBTZyL52lJN1J1FYHunEQIPM9HFmivyEn72VSR1hJCXy1LJxUVwPCBwwEt5uKGa-azAAvqMJ6SA4ML0ngdDV8WS-QFc_IEWMHTsyJx0I1wVg&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 22,
      "title": "Achocolatado NESCAU Chocolate Branco 180g Edição Limitada",
      "link": "https://www.angeloni.com.br/super/p/achocolatado-nescau-chocolate-branco-180g-edicao-limitada-4793721?gclid=googleshopping&pStoreId=14",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:12125784776794525038",
      "product_id": "12125784776794525038",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=12125784776794525038",
      "source": "Angeloni Super",
      "price": "R$ 11,90",
      "extracted_price": 11.9,
      "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTVJfL4EGcs8u_VRpdEcFlBAp0Hjp4reIiuj7OHFqaAXN_rWtGzQGWJGvGpiNmX1Kxu2mU1iZf_M98T_H6jlOw8Bi86mGxazw&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 23,
      "title": "Achocolatado em Pó Nescau Nestlé 370G",
      "link": "https://jadoces.com.br/p/achocolatado-em-po-nescau-nestle-400g/",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:4152735974672370195",
      "product_id": "4152735974672370195",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=4152735974672370195",
      "source": "J.A. Doces",
      "price": "R$ 6,80",
      "extracted_price": 6.8,
      "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTfJRIVArh1cVcqKBQF_erhiyjr5ZrB0rnxCCjEdlmPbRNWegpYrUE9JQoJXhPBNRmFEmGm-1G649oQQHgGOty0erbuypl7dXigPXHDLdqWxXbUINth8hJb3Q&usqp=CAE",
      "delivery": "Entrega de R$ 16,45"
    },
    {
      "position": 24,
      "title": "Achocolatado Nescau 350 Gramas Nestle Kit 5",
      "link": "https://www.extra.com.br/kit-5-achocolatado-nescau-350-gramas-nestle-1535545258/p/1535545258?utm_medium=cpc&utm_source=google_freelisting&IdSku=1535545258&idLojista=12231&tipoLojista=3P",
      "product_link": "https://www.google.com.br/shopping/product/2592764391732013523?gl=br",
      "product_id": "2592764391732013523",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=2592764391732013523",
      "source": "Extra.com.br",
      "price": "R$ 28,84/mês",
      "extracted_price": 28.84,
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQy411aXIhVYgALIrB4tX4SHgqneDGWPNynyShWKK99Qli-MgO6UD5E126zJxwE0f_WDZZOjmFD09eKNqkqSH7ehqRyNCg1PPtT190PQJHuZuJAdP1v4ZO4&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 25,
      "title": "Bebida Lactea Nestle Nescau 200ml",
      "link": "https://www.lojanovamix.com.br/bebida-lactea-nestle-nescau-200ml-7891000379103/p?idsku=798",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:15171032063956131024",
      "product_id": "15171032063956131024",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=15171032063956131024",
      "source": "Loja Novamix",
      "price": "R$ 1,99",
      "extracted_price": 1.99,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQhvX1gD0ubnyROO70kpjr01_U4tV8kmLf2vYJ1ToUsa-o7vMYRJc5mY9UPmtOU-JMD6lGW9rEFSZKdUNPTtFC0WlyWz2CReUjTKXShrWXEiXRC7yFxjRJPbQ&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 26,
      "title": "Achocolatado em Po NESCAU Branco 180g",
      "link": "http://www.sondadelivery.com.br/delivery/produto/achocolatado-em-po-nescau-branco-180g/1000041755",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:1472818508120853027",
      "product_id": "1472818508120853027",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=1472818508120853027",
      "source": "Sonda Supermercados",
      "price": "R$ 11,54",
      "extracted_price": 11.54,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRM4RLPKwrxdaEtyMmuPd-X5uxNNxUSI0kUQOnYeCzbulpkoiWPZ1VgCgF9s_pleCUrrScHTdUz_wco0ZzX-Z193w878p-4sQ&usqp=CAE",
      "delivery": "Entrega de R$ 14,90"
    },
    {
      "position": 27,
      "title": "Biscoito Cookie Nescau Duo Nestlé 60g",
      "link": "https://www.redecomprasdelivery.com.br/produtos/detalhe/18484?srsltid=AdGWZVTdYPSzSOfcFUACE7_YT4Q7FhmdPvyBVOywrKQoIrB35ClOLXuVgi0",
      "product_link": "https://www.google.com.br/shopping/product/6899801052665153297?gl=br",
      "product_id": "6899801052665153297",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=6899801052665153297",
      "source": "redecompras.com",
      "price": "R$ 2,95",
      "extracted_price": 2.95,
      "extensions": [
        "Amanteigado",
        "Fresco"
      ],
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTqREZjrGx8MFD4cZAQYK4oC2D7O3rQjHWoWZLHzPS4Gdqq-EG9y5y0PscdUwMgsiWfO9K5dxiz6T4NgB6rnQeQO3KD2MTBjpmYTybGIWBjuaBqAD8ziCC5&usqp=CAE",
      "delivery": "Entrega de R$ 11,90"
    },
    {
      "position": 28,
      "title": "Achocolatado Nescau Em Pó 3 Kg",
      "link": "https://www.ndays.com.br/nescau-3kg",
      "product_link": "https://www.google.com.br/shopping/product/12061872930793346022?gl=br",
      "product_id": "12061872930793346022",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=12061872930793346022",
      "source": "Ndays Consumo Imediato",
      "price": "R$ 84,00",
      "extracted_price": 84.0,
      "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRGYciCxmr6unRA0UtXj4sqiLIizMrlKri1kB3LVNyLvoAVrQbBEL-4qbfKa9hA-wHd3ev16nVR8hmcjsH2HkbNUWp3u44r99Bh7codNaXfV0hWIM-XEU6T&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 29,
      "title": "Kit Achocolatado Em Pó Nescau Nestlé 370Gr Lata Com 12 Unida",
      "link": "https://www.carrefour.com.br/kit-achocolatado-em-po-nescau-nestle-370gr-lata-com-12-unida-mp924778930/p",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:1568364176328700903",
      "product_id": "1568364176328700903",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=1568364176328700903",
      "source": "Carrefour",
      "price": "R$ 51,63/mês",
      "extracted_price": 51.63,
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9uvP4VlnHocBnXXiwZM1EZEce3434Q3BEzLpNXNRVcAAX83pzi3QZFmp-ptJu0gNtuT129rr0sqhWAVgzE0Q1HpEeNf5u5RGF_KCguM0&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 30,
      "title": "Bebida Láctea Nescau 270ml",
      "link": "https://www.marche.com.br/produtos/bebida-lactea-nescau-fast-270ml",
      "product_link": "https://www.google.com.br/shopping/product/9648353532687607406?gl=br",
      "product_id": "9648353532687607406",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=9648353532687607406",
      "source": "St Marche",
      "price": "R$ 5,49",
      "extracted_price": 5.49,
      "rating": 5.0,
      "reviews": 2,
      "extensions": [
        "Bebida láctea",
        "Chocolate"
      ],
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbqB4jV_fWjRKwQXH13lagdF13UmNI7kFlLaCjIKnNfFVr_-z9JMQ12PN-KeDtyun1pjagoY-xpQO4-bQIhfR8ZUu2Q9YnFqqRkb-d9oCULc0iLq87_awlfQ&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 31,
      "title": "Achocolatado em Pó NESCAU 180g Nestle",
      "link": "https://shopee.com.br/Achocolatado-em-P%C3%B3-NESCAU-180g-i.340585170.17062107135",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:1754323563139753464",
      "product_id": "1754323563139753464",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=1754323563139753464",
      "source": "Shopee",
      "price": "R$ 12,99",
      "extracted_price": 12.99,
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRJh8JmAnSKDKL-xp3hG_iJxjc4OFQdUvP0SMXhYCL84QNDjQFlP53lFPlNZHlXgcd11SqKls7kG9F7ld6QdHhHJXMNaLRhsVPjAnbICt6bDaBQ-wyaVGu2Vw&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 32,
      "title": "Nescau Achocolatado 2kg Nestlé",
      "link": "https://produto.mercadolivre.com.br/MLB-2718845062-achocolatado-nescau-fator-crescer-370g-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic",
      "product_link": "https://www.google.com.br/shopping/product/16773654099453858442?gl=br",
      "product_id": "16773654099453858442",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=16773654099453858442",
      "source": "Mercado Livre",
      "price": "R$ 10,99",
      "extracted_price": 10.99,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQiTsQrGXSmNkYq-9VUXf9Ozh_Tau2R9dyiM7Rg1YuX77Q8NFsgh3YE7l0tGBAokq4XwyptuGza4e0p9wcP1yoPG0qQQpJbH-vcPr0GhIxacQbDj2_obD13yiJr&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 33,
      "title": "Nescau | Latas De Nescau - Unidade | Usado",
      "link": "https://www.enjoei.com.br/p/latas-de-nescau-unidade-71245737?g_campaign=google_shopping",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:4869176861409359853",
      "product_id": "4869176861409359853",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=4869176861409359853",
      "source": "Enjoei.com",
      "price": "R$ 8,47/mês",
      "extracted_price": 8.47,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQS_J8oMub7LoXEewF5p5qG0soXVi-Rw1G7KWm8tJzJJbl9Zy5CP3aau1MdlUUsWjEtKBCmSwYiNWo8HbtTV7lkBDSo-eMZOkfpJp8T9Ms&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 34,
      "title": "Nescau Ball Edição Limitada C/12 75G - Nestle",
      "link": "https://www.dijosdoces.com.br/produtos/nescau-ball-edicao-limitada-c-12-75g-nestle/?pf=gs",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:3404745634463051948",
      "product_id": "3404745634463051948",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=3404745634463051948",
      "source": "Dijos Doces",
      "price": "R$ 71,75",
      "extracted_price": 71.75,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR0C4Jl6Z-ZgiALGLSu5LGisEPjoRzrc1WDXYt6eymdp0ztzEqY8kQptsLSwAhMj3qwCuJqjdDbFBnGe4FNzQHac_FGakoyQKIgIHGZoLQyUle5ZqPgaBBY&usqp=CAE",
      "delivery": "Entrega de R$ 30,00"
    },
    {
      "position": 35,
      "title": "Achocolatado Em Pó Nescau Canela 180g - Nestlé",
      "link": "https://www.superjose.com.br/p/Achocolatado-Po-Nescau-Canela-180G?srsltid=AdGWZVSavUCKSD7GbTMD3llyET-djuTK1NMK8N_tdKjoONyjDAfhFlC_OwI",
      "product_link": "https://www.google.com.br/shopping/product/5120644704538838071?gl=br",
      "product_id": "5120644704538838071",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=5120644704538838071",
      "source": "Super José",
      "price": "R$ 10,39",
      "extracted_price": 10.39,
      "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_XCJ3XgE2bB4SNnf1EaVY_U1a2K-Gzczzy23caOt-eQTwtqHZNiRY0a42PuyZ06qu-iI7qAZRi5OtnOkT5Dwlt0MmhlPy59rLHU110efBMRN_XCYCmfHX&usqp=CAE",
      "delivery": "Entrega gratuita"
    },
    {
      "position": 36,
      "title": "Nescau Ball contendo 12 pacotes de 75g cada",
      "link": "https://www.chocofesta.com.br/marcas/nescau/nescau-ball-contendo-12-pacotes-de-75g-cada?parceiro=6979",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:11320528228777279745",
      "product_id": "11320528228777279745",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=11320528228777279745",
      "source": "Chocofesta",
      "price": "R$ 98,99",
      "extracted_price": 98.99,
      "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnFAv-DNNgiEeFibG8c3MG6G0MvulMf5iXd7vzXOVgu8qiy_njrXO5F42NAZtyg7Evk-ulj_QFc-ul9xZJGQV66OxYMW5oE28YIZc-nhHCYuV2Lwq3KxGd&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 37,
      "title": "Kit 3 latas Nescau 2.0 Actigen-E Achocolatado em Pó 400g - Nestlé",
      "link": "https://www.americanas.com.br/produto/1624064731?opn=YSMESP&offerId=5e912e8f79bf8430cb3e6feb&srsltid=AdGWZVSedy9ScwoVz2dRSolO6eH0lhyXbZGaz3HFUV3yMcQDxIWt-ZpP2Fg",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:2613929084138240169",
      "product_id": "2613929084138240169",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=2613929084138240169",
      "source": "Americanas.com",
      "price": "R$ 36,40",
      "extracted_price": 36.4,
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8AjiAhKBWRAc6d3Q64MI2fANzE89OGsX1pmmPvz59NwxislBxr3ENdzxdCKikzhmaAFTOZZvTgFKrELBLMTLzgvDQcsL4pC-ru7KHe7BB&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 38,
      "title": "Achocolatado Nestle Nescau 3.0 380g",
      "link": "https://supertem.com.br/loja/achoc-nestle-nescau-3-0-380g/",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:8233525488234943912",
      "product_id": "8233525488234943912",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=8233525488234943912",
      "source": "Supertem",
      "price": "R$ 10,99",
      "extracted_price": 10.99,
      "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSZiL7mYHyaPlcZEg0OIJKU9XgFPOYNYGmUtUNiDEWetIDRM4qQ4HFsI_uistRPOzKjG4Vi7NL5Q27ak9IvW2isGGeR7lZw0mnfgPV0eHxy_U7UZNBUwtBp&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 39,
      "title": "Achocolatado Nescau 200gr",
      "link": "https://www.magazineluiza.com.br/achocolatado-nescau-200gr/p/bg8h8ada2a/me/achl/?&seller_id=gnconfeitaria",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:14232236283519930211",
      "product_id": "14232236283519930211",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=14232236283519930211",
      "source": "Magazine Luiza",
      "price": "R$ 5,87",
      "extracted_price": 5.87,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScc3vCccBk69jzVEPDOvBpdRLS3DngrID_d4VFhz4zfJ0rn9F1TxjyoVW-ByembU-lAAJitrmVWggLQiryRGgOhpjSDl2EMdqc2OnITO3aEbLLyeun7IlK&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 40,
      "title": "Achocolatado (30 UNID) Nescau 370g",
      "link": "https://www.qualycestas.com.br/achocolatado--30-unid--nescau-370g/p?idsku=337",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:6098145490527754291",
      "product_id": "6098145490527754291",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=6098145490527754291",
      "source": "QualyCestas",
      "price": "R$ 86,63/mês",
      "extracted_price": 86.63,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgznxu6EcHV4ydCZNPgD4L2dMFKF-EkqD6GXOShlo-872R_zjFElQsNEAIpLd3LL2PCiCmqi8ajYgYJq-UOwhQt9pgooS_rA&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 41,
      "title": "Biscoito Nescau Recheado 140g- Nestlé",
      "link": "https://www.paguemenos.com.br/biscoito-nescau-recheado-140g/p?idsku=64512",
      "product_link": "https://www.google.com.br/shopping/product/9084700997970094582?gl=br",
      "product_id": "9084700997970094582",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=9084700997970094582",
      "source": "Farmácias Pague Menos",
      "price": "R$ 4,49",
      "extracted_price": 4.49,
      "extensions": [
        "Amanteigado",
        "Fresco"
      ],
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTSLeeVEbQ00QPP8VkMWJtdVIw5OBsA4Xoqgo9kAzQP1iqX9JVjXGlpMbn4KGGPMUOAhj9u52AiS9gINDta3qSU3mCcVGvzeB0LLcOmvMvdwjE47PtTOfHqDg&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 42,
      "title": "Achocolatado Nescau Duo 180g",
      "link": "https://www.jordaosupermercado.com.br/loja/vitrini/www.jordaosupermercado.com.br/0/137437",
      "product_link": "https://www.google.com.br/shopping/product/18373217482890726643?gl=br",
      "product_id": "18373217482890726643",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=18373217482890726643",
      "source": "Jordão Supermercado",
      "price": "R$ 10,90",
      "extracted_price": 10.9,
      "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQDyDpd4i1kHttlMUfhNxHV1HA1_3ZizAOi3_EyhCXmb_opFmv-MIXIzVVof1sUDLQwaLp4loAlODDauHymVgQhUTWKhj3RkYRpT1dEvEVE5GbqgvYKaTfbWw&usqp=CAE",
      "delivery": "Entrega gratuita"
    },
    {
      "position": 43,
      "title": "Chocolate Nescau 90g",
      "link": "https://www.havan.com.br/barra-de-chocolate-nescau-nestle-diversos/p",
      "product_link": "https://www.google.com.br/shopping/product/8098211222376660170?gl=br",
      "product_id": "8098211222376660170",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=8098211222376660170",
      "source": "Havan",
      "price": "R$ 5,99",
      "extracted_price": 5.99,
      "extensions": [
        "Chocolate ao leite"
      ],
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSVW4uz9jNuMdChl8Bo_UmsXhCh6o7XM2Y9ABZcAnH8tLMx0jYiFKOOprb8qHGpfHSCiMs8039qk8kdOQDMImuq3DYTS6CySujsacvWIquBBc66-LDHewF2Cw&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 44,
      "title": "Achocolatado Nescau 2.0 Lata 200G",
      "link": "https://www.superuniaobq.com.br/product-page/achocolatado-nescau-2-0-lata-200g?srsltid=AdGWZVRBFRc5374JGqm5qd0zTzRP45-mr3MLwStVoJQF2neBWvSiK4EonNg",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:812941214830373769",
      "product_id": "812941214830373769",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=812941214830373769",
      "source": "supermercado união",
      "price": "R$ 4,99",
      "extracted_price": 4.99,
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQR9l7eYlrDLpq4k4h7SOAE7MpLFPOahBwWE7xRLOm6FAn9XkpTv58W-Pxtf_rFkBHyfaXYSmOhZNqhK7LodWEujJpAIaBxwQ&usqp=CAE",
      "delivery": "Entrega de R$ 15,00"
    },
    {
      "position": 45,
      "title": "Achocolatado Nescau 400g",
      "link": "https://www.ifrutus.com.br/produto/achocolatado-nescau-400g-71926?utm_source=&utm_medium=&utm_campaign=",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:5747329658644768059",
      "product_id": "5747329658644768059",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=5747329658644768059",
      "source": "iFrutus",
      "price": "R$ 12,99",
      "extracted_price": 12.99,
      "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR54Ze8mETeYAYplkdVcYHLTUIAswl5QuGbkVZkMNVZ7h0T87B7nvjXNFht1AOdtCuQ9MyR4OgImXMm7Oe_xC13u3C8nQ4LUA&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 46,
      "title": "Achocolatado Nescau Max Cereal 165g 0% Adição de Açúcares Lata Edição Limitada Nestle",
      "link": "https://shopee.com.br/Achocolatado-Nescau-Max-Cereal-165g-0--Adi%C3%A7%C3%A3o-de-A%C3%A7%C3%BAcares-Lata-Edi%C3%A7%C3%A3o-Limitada-i.296858075.17964025272",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:2739024973906140819",
      "product_id": "2739024973906140819",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=2739024973906140819",
      "source": "Shopee",
      "price": "R$ 18,90",
      "extracted_price": 18.9,
      "extensions": [
        "Sem açúcar adicionado"
      ],
      "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-AF_coHw9TwfHLgDk4TZZb2p9jU4inwww6x6NHjqjvTXRqMHuzuOt6vKjKDiFZWt9eoKKLflCgCvwYA2zqYPIldx9687YWlZdG8Zwd5Zx58rqSoGE0o24&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 47,
      "title": "Achocolatado Em Pó Nescau Max 165 G",
      "link": "https://www.docevidadiabetes.com.br/produtos-diet/achocolatado-diet-cafe-diet-shake-sem-acucar/achocolatado-sem-adicao-de-acucar-nescau-max-cereal-nestle-165g.html?fee=1&fep=2160",
      "product_link": "https://www.google.com.br/shopping/product/2716048750176540130?gl=br",
      "product_id": "2716048750176540130",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=2716048750176540130",
      "source": "Doce Vida Diabetes",
      "price": "R$ 17,90",
      "extracted_price": 17.9,
      "rating": 4.6,
      "reviews": 5,
      "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQC_x-oxSrkFPo_w_f0nODL2Q-M1uSN_wGTgMqmVxhIKXOE9C5K-kkoCOwtbq0SYFl519KpzLgX9B_P5_e4AvZ7TO5yagjXGOoLUgm0INSDXpPy6oysM-it&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 48,
      "title": "Achocolatado Em Pó Nescau 2.0 Sachê 800 G",
      "link": "https://www.supermercadonossacasa.com.br/p/Achocolatado-em-Po-Nestle-Nescau-Pacote-800g-Embalagem-Economica",
      "product_link": "https://www.google.com.br/shopping/product/10850277776311489927?gl=br",
      "product_id": "10850277776311489927",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=10850277776311489927",
      "source": "Supermercado Nossa Casa",
      "price": "R$ 13,99",
      "extracted_price": 13.99,
      "rating": 4.6,
      "reviews": 32,
      "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDZlYf0rHwz9YJKfcg3g-Py1dh8dgzxPJJVHmU6Wn0gEyTlIah0gy01hBBt-Dw89QiNHfGzEfiFVIV2fAgqClTAZ5Qf3dgU3AGO5cjg8-5GMTSLPGhyow_&usqp=CAE",
      "delivery": "Entrega de R$ 10,00"
    },
    {
      "position": 49,
      "title": "Achocolatado NESCAU Canela 180g Edição Limitada",
      "link": "https://www.angeloni.com.br/super/p/achocolatado-nescau-canela-180g-edicao-limitada-4793712?gclid=googleshopping&pStoreId=14",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:17979679072951734676",
      "product_id": "17979679072951734676",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=17979679072951734676",
      "source": "Angeloni Super",
      "price": "R$ 11,90",
      "extracted_price": 11.9,
      "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSAx7jilxM0bUlPGJ4hu7_l4-F7_WUXzfa1DPkoQ3V6d7XB6Kzo1LlULKXzI5PMKJemPfT6RJGVtVDw8iHDz796DoyfIycv_g&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 50,
      "title": "Achocolatado Em Pó Nescau 380g",
      "link": "https://www.clubeextra.com.br/produto/374990?storeId=241&isGoogleShopping=true",
      "product_link": "https://www.google.com.br/shopping/product/5521563963418479908?gl=br",
      "product_id": "5521563963418479908",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=5521563963418479908",
      "source": "Clube Extra",
      "price": "R$ 8,38",
      "extracted_price": 8.38,
      "rating": 4.2,
      "reviews": 9,
      "thumbnail": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSnBdsJyRvLOnMZcWouIypfq_8c_aKpgOL58tmxwI0PTfUknWEPOLATwbfXiMrj65-e3Q-3uhL6QbxScsR7WPQdjhJqRak9ObCvKjChlNOxvC_iJcs0bXQW7g&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 51,
      "title": "Nescau Achocolatado Em Pó 370g Kit Com 3 Latas - Promoçao Nestlé",
      "link": "https://produto.mercadolivre.com.br/MLB-2638435774-nescau-achocolatado-em-po-370g-kit-com-3-latas-promocao-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic",
      "product_link": "https://www.google.com.br/shopping/product/177615848485209532?gl=br",
      "product_id": "177615848485209532",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=177615848485209532",
      "source": "Mercado Livre",
      "price": "R$ 32,78",
      "extracted_price": 32.78,
      "rating": 4.5,
      "reviews": 10,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTLAHyeAMOoO9jVfJHZNnERJdY4JPWcaHAAR8WcdeBqZGd4tUs7HdVVELxBZF62h0QaHl09uk1lDbin7ARdCSC2U-es3oVWIL9pyUQJVgJU7pW2uGPyW9LE&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 52,
      "title": "Achocolatado Nescau 2.0 400G",
      "link": "https://redebiomax.com.br/produto/22909/achocolatado-nescau-20-400g?srsltid=AdGWZVTuggbb6EzjyQ6Kx-tIh2V9wJ7a3hds1X0d6rDHwHp_UZGn5TtWcKY",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:4893661254346934067",
      "product_id": "4893661254346934067",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=4893661254346934067",
      "source": "Rede Biomax",
      "price": "R$ 7,69",
      "extracted_price": 7.69,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRTrMZI9GfTNBIx_jUchLq3VujX8TTixB1C9hvH2PzSuph6Lo77vUk63N_Fb3R8E8SolzV__oIFATSfVw7Yp7hbhkmRFoAadZJtbe7KL2Vn&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 53,
      "title": "Kit 6 Achocolatado Em Pó Nescau Nestle Lata 200g",
      "link": "https://www.casasbahia.com.br/kit-6-achocolatado-em-po-nescau-nestle-lata-200g-1510036450/p/1510036450?utm_medium=Cpc&utm_source=google_freelisting&IdSku=1510036450&idLojista=35697&tipoLojista=3P",
      "product_link": "https://www.google.com.br/shopping/product/3612085868841309333?gl=br",
      "product_id": "3612085868841309333",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=3612085868841309333",
      "source": "Casas Bahia",
      "price": "R$ 38,49",
      "extracted_price": 38.49,
      "rating": 4.5,
      "reviews": 10,
      "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS13bWUMnu1N2YNez_2qVF40eIb6T_czlSW7SxSb1S_wEvfDFz4K1SjexmGImdwcGChS61cK3Xu83lDP71Is28tdjav-mxb50toqqb_tZ56RBLrw3l5pEd9&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 54,
      "title": "Achocolatado em Po NESCAU 370g",
      "link": "http://www.sondadelivery.com.br/delivery/produto/achocolatado-em-po-nescau-370g/1000039851",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:4356963414433961706",
      "product_id": "4356963414433961706",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=4356963414433961706",
      "source": "Sonda Supermercados",
      "price": "R$ 8,55",
      "extracted_price": 8.55,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXRxOmHOB-iJWwYUMRuoORXFZ5UslEQyMNP66RWoekAnNX7dwPORNXh6kSinOhch5CHtq8UWRHJjJDv7wcaLMpVw8BHGR3Yg&usqp=CAE",
      "delivery": "Entrega de R$ 14,90"
    },
    {
      "position": 55,
      "title": "Cereal Matinal Nescau 270g",
      "link": "https://www.efacil.com.br/loja/produto/cereal-matinal-nescau-270g-1610700/?canal=ca_9784",
      "product_link": "https://www.google.com.br/shopping/product/17194897150318899247?gl=br",
      "product_id": "17194897150318899247",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=17194897150318899247",
      "source": "eFácil",
      "price": "R$ 8,90",
      "extracted_price": 8.9,
      "rating": 5.0,
      "reviews": 1,
      "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRVHuLSB_EPGUyglezj-6CgIvWf1_MTpLf24eo6O_gYUCb-8ZvLaFh_eG1kHk_ajHDKIJDUU4BByZqdYDhyZmy3VWsZGgWnfCuZ21HbJhJ5e7jtAePhz15n&usqp=CAE",
      "delivery": "Entrega grátis e devolução grátis em até 7 dias"
    },
    {
      "position": 56,
      "title": "Kit Achocolatado Nescau Instantâneo Refil Com Lata 90 Anos - Nescau nestle",
      "link": "https://www.magazineluiza.com.br/kit-achocolatado-nescau-instantaneo-refil-com-lata-90-anos-nescau-nestle/p/akbh4kja96/me/achl/?&seller_id=megashoppingribeirao",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:9118995335029405771",
      "product_id": "9118995335029405771",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=9118995335029405771",
      "source": "Magazine Luiza",
      "price": "R$ 31,99",
      "extracted_price": 31.99,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTCAdakBkLOP12BnE0LiGGW43ZfT-6lnQXUDdz8AeWuFt2HPvO2vCakJBke3gp9kCVrj-GFd3TL1wkWDy2f1o510ouzpNOxgL20knZfVdnB8sEEjbI56IuPfA&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 57,
      "title": "Achocolatado Em Pó Nescau Light 400g",
      "link": "http://drive.supermercadoestrelaazul.com.br/products/achoc-nescau-light-400g?srsltid=AdGWZVRnp0dQkyhij8wMZcP2AjaHbyQmCk0zHmMGZ6ZuhXqxXlRBdhlrSLA",
      "product_link": "https://www.google.com.br/shopping/product/6346792556860238948?gl=br",
      "product_id": "6346792556860238948",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=6346792556860238948",
      "source": "Supermercado Estrela Azul",
      "price": "R$ 13,69",
      "extracted_price": 13.69,
      "thumbnail": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQiBpBUY0ocJNaHf21YAfI45tDC4sdWJwvPnLFXCPuyHa2KglBkQhwSW8c5EetMAynVSlhhvfE8-BEMPv_TCSLarIPkhgMT3XbpYht5jd_gx0Z02CUby7GJ4g&usqp=CAE",
      "delivery": "Frete não incluído"
    },
    {
      "position": 58,
      "title": "Achocolatado Nestlé Nescau 3.0 380g",
      "link": "https://loja10.bistek.com.br/achoc-nescau-380g-3-0.html?utm_source=google_shopping",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:9072604913582719156",
      "product_id": "9072604913582719156",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=9072604913582719156",
      "source": "Bistek Supermercados",
      "price": "R$ 10,99",
      "extracted_price": 10.99,
      "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCr5WeDioRH2xZEh-8vEiU6_y6cHhlL9RMxOzuqp3iXUsVO9LPAO8nhrUo6snWQsAvqAXIFXYeRmAnK2AK8i0PYtOgEx5wbOsVZk7se413a83PzqYYHi6Dkw&usqp=CAE",
      "delivery": "Entrega grátis e devolução grátis em até 7 dias"
    },
    {
      "position": 59,
      "title": "Achocolatado Nescau Canela Lata 180g",
      "link": "https://centralmaxsupermercados.com.br/presidenteepitacio/produto/achocolatado-nescau-canela-lata-180g/",
      "product_link": "https://www.google.com.br/shopping/product/1?gl=br&prds=pid:5802866092560359484",
      "product_id": "5802866092560359484",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=5802866092560359484",
      "source": "Central Max Supermercados",
      "price": "R$ 9,98",
      "extracted_price": 9.98,
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSWkbH1WFwalweTZOmBMOoAUWWnKKJr2SLP3VOvlmTnTebHrnJdWhxofu62ga82ETeJxNbygIto0JmUKPUgGvbPaWTAlgYL9g1EyvBBpRZUEU5NvmZ5bWWc&usqp=CAE",
      "delivery": "Entrega de R$ 5,00"
    },
    {
      "position": 60,
      "title": "Achocolatado Nescau 350 Gramas - Nestle",
      "link": "https://www.redomma.com.br/achocolatado-nescau-400-gramas-nestle",
      "product_link": "https://www.google.com.br/shopping/product/11396021941067602908?gl=br",
      "product_id": "11396021941067602908",
      "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=br&google_domain=google.com.br&hl=pt&location=State+of+Ceara%2C+Brazil&product_id=11396021941067602908",
      "source": "redomma.com.br",
      "price": "R$ 5,91/mês",
      "extracted_price": 5.91,
      "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR-vt1gIG5g_ABwoye7i5-WjKPpQanewc_4aX4ZArS0pTNHHbiDIsoh9JAsGb4zi4sM1utG5Ry6YlEwkxuyMv6XDpqWNXmDbXBUrCljIXGNW5Y4urvRrbLMag&usqp=CAE",
      "delivery": "Frete não incluído"
    }
  ]