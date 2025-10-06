// para poblar la db ejecutar: mongosh despues copiar y pegar todo el archivo y darle enter
db.petitorio_oficial.insertMany([
  {
    "principio_activo": "Acerocumarol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 4
      }
    },
    "categoria": "Anticoagulante",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Acetazolamida",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Diurético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Aciclovir",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 200
      }
    },
    "categoria": "Antiviral",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral",
    "alternativas": ["Valaciclovir", "Velaciclovir"]
  },
  {
    "principio_activo": "Aciclovir",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 400
      }
    },
    "categoria": "Antiviral",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral",
    "alternativas": ["Valaciclovir"]
  },
  {
    "principio_activo": "Aciclovir",
    "forma": {
      "tipo_de_forma": "Crema",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 5
      }
    },
    "categoria": "Antiviral",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Tópica"
  },
  {
    "principio_activo": "Aciclovir",
    "forma": {
      "tipo_de_forma": "Ungüento oftálmico",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 3
      }
    },
    "categoria": "Antiviral",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Ácido Acetilsalicílico",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Antiagregante plaquetario",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ácido Acetilsalicílico",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Analgésico/Antiinflamatorio",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ácido Ascórbico",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Vitamina",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ácido Ascórbico",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Vitamina",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ácido Fólico",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 1
      }
    },
    "categoria": "Vitamina",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ácido Fólico",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 5
      }
    },
    "categoria": "Vitamina",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ácido Valproico",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 200
      }
    },
    "categoria": "Antiepiléptico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Albendazol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 200
      }
    },
    "categoria": "Antiparasitario",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Alopurinol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Antigotoso",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Alopurinol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 300
      }
    },
    "categoria": "Antigotoso",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Alprazolam",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.25
      }
    },
    "categoria": "Ansiolítico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Alprazolam",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.5
      }
    },
    "categoria": "Ansiolítico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Aluminio Hidroxido",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antiácido",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Aluminio Hidroxido",
    "forma": {
      "tipo_de_forma": "Suspensión oral",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 6
      }
    },
    "categoria": "Antiácido",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Amiodarona",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 200
      }
    },
    "categoria": "Antiarrítmico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Amitriptilina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 25
      }
    },
    "categoria": "Antidepresivo",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Amoxicilina",
    "forma": {
      "tipo_de_forma": "Cápsula",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Amoxicilina",
    "forma": {
      "tipo_de_forma": "Cápsula",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Amoxicilina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 750
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Amoxicilina",
    "forma": {
      "tipo_de_forma": "Polvo para suspensión oral",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Amoxicilina",
    "forma": {
      "tipo_de_forma": "Polvo para suspensión oral",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Amoxicilina + Ácido Clavulánico",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 625
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Amoxicilina + Ácido Clavulánico",
    "forma": {
      "tipo_de_forma": "Polvo para suspensión inyectable",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 1200
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Intravenosa"
  },
  {
    "principio_activo": "Atenolol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 50
      }
    },
    "categoria": "Betabloqueador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Atenolol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Betabloqueador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Atorvastatina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 10
      }
    },
    "categoria": "Hipolipemiante",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral",
    "alternativas": ["Pravastatina", "Lovastatina"]
  },
  {
    "principio_activo": "Atorvastatina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 20
      }
    },
    "categoria": "Hipolipemiante",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral",
    "alternativas": ["Pravastatina", "Lovastatina"]
  },
  {
    "principio_activo": "Atropina Sulfato",
    "forma": {
      "tipo_de_forma": "Solución oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 1
      }
    },
    "categoria": "Midriático",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Azatioprina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 50
      }
    },
    "categoria": "Inmunosupresor",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Azitromicina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Azitromicina",
    "forma": {
      "tipo_de_forma": "Polvo para suspensión oral",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 200
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Bacitracina + Neomicina",
    "forma": {
      "tipo_de_forma": "Pomada",
      "dosis": {
        "tipo_de_unidad": "UI/g + mg/g",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico tópico",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Tópica"
  },
  {
    "principio_activo": "Beclometasona",
    "forma": {
      "tipo_de_forma": "Aerosol para inhalación",
      "dosis": {
        "tipo_de_unidad": "mcg/dosis",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Corticoide inhalado",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Inhalatoria"
  },
  {
    "principio_activo": "Bencilpenicilina",
    "forma": {
      "tipo_de_forma": "Polvo para solución inyectable",
      "dosis": {
        "tipo_de_unidad": "UI",
        "cantidad_de_dosis": 1000000
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Intramuscular"
  },
  {
    "principio_activo": "Bencilpenicilina",
    "forma": {
      "tipo_de_forma": "Polvo para solución inyectable",
      "dosis": {
        "tipo_de_unidad": "UI",
        "cantidad_de_dosis": 2000000
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Intramuscular"
  },
  {
    "principio_activo": "Benzatina Bencilpenicilina",
    "forma": {
      "tipo_de_forma": "Polvo para solución inyectable",
      "dosis": {
        "tipo_de_unidad": "UI",
        "cantidad_de_dosis": 1200000
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Intramuscular"
  },
  {
    "principio_activo": "Betametasona",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.6
      }
    },
    "categoria": "Corticoide",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Betametasona",
    "forma": {
      "tipo_de_forma": "Solución inyectable",
      "dosis": {
        "tipo_de_unidad": "mg/ml",
        "cantidad_de_dosis": 4
      }
    },
    "categoria": "Corticoide",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Intramuscular"
  },
  {
    "principio_activo": "Betametasona",
    "forma": {
      "tipo_de_forma": "Solución oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.1
      }
    },
    "categoria": "Corticoide",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Betametasona",
    "forma": {
      "tipo_de_forma": "Ungüento oftálmico",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.1
      }
    },
    "categoria": "Corticoide",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Betaxolol",
    "forma": {
      "tipo_de_forma": "Solución oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.5
      }
    },
    "categoria": "Betabloqueador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Captopril",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 25
      }
    },
    "categoria": "Antihipertensivo",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Carbamazepina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 200
      }
    },
    "categoria": "Antiepiléptico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Cefadroxilo",
    "forma": {
      "tipo_de_forma": "Cápsula",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Cefadroxilo",
    "forma": {
      "tipo_de_forma": "Suspensión oral",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Cefixima",
    "forma": {
      "tipo_de_forma": "Cápsula",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 400
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Cefradina",
    "forma": {
      "tipo_de_forma": "Cápsula",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Cefradina",
    "forma": {
      "tipo_de_forma": "Suspensión oral",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Cefuroxima",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Cefuroxima",
    "forma": {
      "tipo_de_forma": "Gránulos para suspensión oral",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ciclobenzaprina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 10
      }
    },
    "categoria": "Relajante muscular",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ciprofloxacino",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ciprofloxacino",
    "forma": {
      "tipo_de_forma": "Solución oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.3
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Ciprofloxacino",
    "forma": {
      "tipo_de_forma": "Ungüento oftálmico",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.3
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Claritromicina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Claritromicina",
    "forma": {
      "tipo_de_forma": "Polvo para suspensión oral",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Clindamicina",
    "forma": {
      "tipo_de_forma": "Crema vaginal",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 2
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Vaginal"
  },
  {
    "principio_activo": "Clindamicina",
    "forma": {
      "tipo_de_forma": "Loción o gel",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 1
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Tópica"
  },
  {
    "principio_activo": "Clobetazol",
    "forma": {
      "tipo_de_forma": "Crema",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.05
      }
    },
    "categoria": "Corticoide tópico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Tópica"
  },
  {
    "principio_activo": "Clobutinol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 40
      }
    },
    "categoria": "Antitusivo",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Clonazepam",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.5
      }
    },
    "categoria": "Antiepiléptico/Ansiolítico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Clonazepam",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 2
      }
    },
    "categoria": "Antiepiléptico/Ansiolítico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Cloranfenicol",
    "forma": {
      "tipo_de_forma": "Cápsula",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Cloranfenicol",
    "forma": {
      "tipo_de_forma": "Solución oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.5
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Cloranfenicol",
    "forma": {
      "tipo_de_forma": "Ungüento oftálmico",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 1
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Clorfenamina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 4
      }
    },
    "categoria": "Antihistamínico",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Clorpromazina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 25
      }
    },
    "categoria": "Antipsicótico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Clorpropamida",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Antidiabético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Clotrimazol",
    "forma": {
      "tipo_de_forma": "Óvulo vaginal",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Antifúngico",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Vaginal"
  },
  {
    "principio_activo": "Clotrimazol",
    "forma": {
      "tipo_de_forma": "Crema",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 1
      }
    },
    "categoria": "Antifúngico",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Tópica",
    "alternativas": ["Bifonazol"]
  },
  {
    "principio_activo": "Cloxacilina",
    "forma": {
      "tipo_de_forma": "Cápsula o Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Clozapina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 25
      }
    },
    "categoria": "Antipsicótico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Clozapina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 50
      }
    },
    "categoria": "Antipsicótico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Clozapina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Antipsicótico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Colchicina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.5
      }
    },
    "categoria": "Antigotoso",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Cotrimoxazol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 480
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Cotrimoxazol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 960
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Cotrimoxazol",
    "forma": {
      "tipo_de_forma": "Suspensión oral",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 240
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Crotamiton",
    "forma": {
      "tipo_de_forma": "Crema",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 10
      }
    },
    "categoria": "Antipruriginoso",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Tópica"
  },
  {
    "principio_activo": "Deltametrina + Piperonil Butóxido",
    "forma": {
      "tipo_de_forma": "Loción",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 22.5
      }
    },
    "categoria": "Pediculicida",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Tópica"
  },
  {
    "principio_activo": "Dexametasona",
    "forma": {
      "tipo_de_forma": "Solución oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.1
      }
    },
    "categoria": "Corticoide",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Dexametasona",
    "forma": {
      "tipo_de_forma": "Ungüento oftálmico",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.1
      }
    },
    "categoria": "Corticoide",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Diazepam",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 10
      }
    },
    "categoria": "Ansiolítico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Diclofenaco",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 25
      }
    },
    "categoria": "Antiinflamatorio",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Diclofenaco",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 50
      }
    },
    "categoria": "Antiinflamatorio",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Diclofenaco",
    "forma": {
      "tipo_de_forma": "Solución inyectable",
      "dosis": {
        "tipo_de_unidad": "mg/ml",
        "cantidad_de_dosis": 50
      }
    },
    "categoria": "Antiinflamatorio",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Intramuscular"
  },
  {
    "principio_activo": "Diclofenaco",
    "forma": {
      "tipo_de_forma": "Supositorio infantil",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 12.5
      }
    },
    "categoria": "Antiinflamatorio",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Rectal"
  },
  {
    "principio_activo": "Digoxina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.25
      }
    },
    "categoria": "Cardiotónico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Domperidona",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 10
      }
    },
    "categoria": "Antiemético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Domperidona",
    "forma": {
      "tipo_de_forma": "Supositorio pediátrico",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 30
      }
    },
    "categoria": "Antiemético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Rectal"
  },
  {
    "principio_activo": "Domperidona",
    "forma": {
      "tipo_de_forma": "Solución oral para gotas",
      "dosis": {
        "tipo_de_unidad": "mg/ml",
        "cantidad_de_dosis": 10
      }
    },
    "categoria": "Antiemético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Enalapril",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 5
      }
    },
    "categoria": "Antihipertensivo",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Enalapril",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 10
      }
    },
    "categoria": "Antihipertensivo",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Enalapril",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 20
      }
    },
    "categoria": "Antihipertensivo",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ergocalciferol",
    "forma": {
      "tipo_de_forma": "Solución oral",
      "dosis": {
        "tipo_de_unidad": "UI/ml",
        "cantidad_de_dosis": 300000
      }
    },
    "categoria": "Vitamina",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Eritromicina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Eritromicina",
    "forma": {
      "tipo_de_forma": "Polvo para suspensión oral",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 200
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Eritromicina",
    "forma": {
      "tipo_de_forma": "Polvo para suspensión oral",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 400
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Escopolamina",
    "forma": {
      "tipo_de_forma": "Solución inyectable",
      "dosis": {
        "tipo_de_unidad": "mg/ml",
        "cantidad_de_dosis": 20
      }
    },
    "categoria": "Antiespasmódico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Intramuscular",
    "alternativas": ["Pargeverina"]
  },
  {
    "principio_activo": "Espironolactona",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 25
      }
    },
    "categoria": "Diurético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Estradiol",
    "forma": {
      "tipo_de_forma": "Solución oleosa inyectable",
      "dosis": {
        "tipo_de_unidad": "mg/ml",
        "cantidad_de_dosis": 10
      }
    },
    "categoria": "Hormona",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Intramuscular"
  },
  {
    "principio_activo": "Estrógenos Conjugados",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.3
      }
    },
    "categoria": "Hormona",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Estrógenos Conjugados",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.625
      }
    },
    "categoria": "Hormona",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Etinilestradiol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.02
      }
    },
    "categoria": "Hormona",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Fenitoína",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Antiepiléptico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Sulfato Ferroso",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 200
      }
    },
    "categoria": "Suplemento mineral",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Sulfato Ferroso",
    "forma": {
      "tipo_de_forma": "Solución oral para gotas",
      "dosis": {
        "tipo_de_unidad": "mg/ml",
        "cantidad_de_dosis": 125
      }
    },
    "categoria": "Suplemento mineral",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Flucloxacilina",
    "forma": {
      "tipo_de_forma": "Polvo para suspensión oral",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Fluconazol",
    "forma": {
      "tipo_de_forma": "Cápsula",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 150
      }
    },
    "categoria": "Antifúngico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral",
    "alternativas": ["Itraconazol"]
  },
  {
    "principio_activo": "Fluoxetina",
    "forma": {
      "tipo_de_forma": "Cápsula",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 20
      }
    },
    "categoria": "Antidepresivo",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Furosemida",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 40
      }
    },
    "categoria": "Diurético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Gemfibrozilo",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 300
      }
    },
    "categoria": "Hipolipemiante",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Gentamicina",
    "forma": {
      "tipo_de_forma": "Solución inyectable",
      "dosis": {
        "tipo_de_unidad": "mg/ml",
        "cantidad_de_dosis": 40
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Intramuscular"
  },
  {
    "principio_activo": "Gentamicina",
    "forma": {
      "tipo_de_forma": "Solución oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.3
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Glibenclamida",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 5
      }
    },
    "categoria": "Antidiabético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Griseofulvina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antifúngico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Haloperidol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 1
      }
    },
    "categoria": "Antipsicótico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Haloperidol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 5
      }
    },
    "categoria": "Antipsicótico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Hidralazina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 50
      }
    },
    "categoria": "Antihipertensivo",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Hidroclorotiazida",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 50
      }
    },
    "categoria": "Diurético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Hidrocortisona",
    "forma": {
      "tipo_de_forma": "Ungüento dérmico",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 1
      }
    },
    "categoria": "Corticoide",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Tópica"
  },
  {
    "principio_activo": "Hipromelosa",
    "forma": {
      "tipo_de_forma": "Solución oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.3
      }
    },
    "categoria": "Lubricante ocular",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Ibuprofeno",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 200
      }
    },
    "categoria": "Antiinflamatorio",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ibuprofeno",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 400
      }
    },
    "categoria": "Antiinflamatorio",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ibuprofeno",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 600
      }
    },
    "categoria": "Antiinflamatorio",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ibuprofeno",
    "forma": {
      "tipo_de_forma": "Suspensión oral",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Antiinflamatorio",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Imipramina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 25
      }
    },
    "categoria": "Antidepresivo",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Insulina Humana Cristalina",
    "forma": {
      "tipo_de_forma": "Solución inyectable",
      "dosis": {
        "tipo_de_unidad": "UI/ml",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Antidiabético",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Subcutánea"
  },
  {
    "principio_activo": "Insulina Humana Isofana (NPH)",
    "forma": {
      "tipo_de_forma": "Solución inyectable",
      "dosis": {
        "tipo_de_unidad": "UI/ml",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Antidiabético",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Subcutánea"
  },
  {
    "principio_activo": "Ipratropio",
    "forma": {
      "tipo_de_forma": "Solución para inhalación",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.025
      }
    },
    "categoria": "Broncodilatador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Inhalatoria"
  },
  {
    "principio_activo": "Isosorbida",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 10
      }
    },
    "categoria": "Vasodilatador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Isosorbida",
    "forma": {
      "tipo_de_forma": "Comprimido sublingual",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 5
      }
    },
    "categoria": "Vasodilatador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Sublingual"
  },
  {
    "principio_activo": "Ketoconazol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 200
      }
    },
    "categoria": "Antifúngico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ketoconazol",
    "forma": {
      "tipo_de_forma": "Óvulo vaginal",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 400
      }
    },
    "categoria": "Antifúngico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Vaginal"
  },
  {
    "principio_activo": "Ketoconazol",
    "forma": {
      "tipo_de_forma": "Crema",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 2
      }
    },
    "categoria": "Antifúngico",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Tópica"
  },
  {
    "principio_activo": "Ketoprofeno",
    "forma": {
      "tipo_de_forma": "Solución inyectable",
      "dosis": {
        "tipo_de_unidad": "mg/ml",
        "cantidad_de_dosis": 50
      }
    },
    "categoria": "Antiinflamatorio",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Intramuscular"
  },
  {
    "principio_activo": "Lactulosa",
    "forma": {
      "tipo_de_forma": "Solución oral",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 65
      }
    },
    "categoria": "Laxante",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Levodopa + Carbidopa",
    "forma": {
      "tipo_de_forma": "Cápsula",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 275
      }
    },
    "categoria": "Antiparkinsoniano",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Levofloxacino",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Levonorgestrel",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.03
      }
    },
    "categoria": "Anticonceptivo",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Levonorgestrel",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.75
      }
    },
    "categoria": "Anticonceptivo de emergencia",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Levonorgestrel + Etinilestradiol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.18
      }
    },
    "categoria": "Anticonceptivo",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Levotiroxina Sódica",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.05
      }
    },
    "categoria": "Hormona tiroidea",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Levotiroxina Sódica",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.1
      }
    },
    "categoria": "Hormona tiroidea",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Carbonato de Litio",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 300
      }
    },
    "categoria": "Estabilizador del ánimo",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Loperamida",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 2
      }
    },
    "categoria": "Antidiarreico",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Loratadina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 10
      }
    },
    "categoria": "Antihistamínico",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Loratadina",
    "forma": {
      "tipo_de_forma": "Jarabe",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 5
      }
    },
    "categoria": "Antihistamínico",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Lorazepam",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 1
      }
    },
    "categoria": "Ansiolítico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Lorazepam",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 2
      }
    },
    "categoria": "Ansiolítico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Losartan",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 50
      }
    },
    "categoria": "Antihipertensivo",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Mebendazol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Antiparasitario",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Medroxiprogesterona",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 5
      }
    },
    "categoria": "Hormona",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Medroxiprogesterona",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Hormona",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Metamizol Sódico",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 300
      }
    },
    "categoria": "Analgésico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Metamizol Sódico",
    "forma": {
      "tipo_de_forma": "Supositorio",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Analgésico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Rectal"
  },
  {
    "principio_activo": "Metformina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 850
      }
    },
    "categoria": "Antidiabético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Metildopa",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Antihipertensivo",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Metilfenidato",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 10
      }
    },
    "categoria": "Estimulante del SNC",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Metoclopramida",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 10
      }
    },
    "categoria": "Antiemético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Metotrexato",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 2.5
      }
    },
    "categoria": "Inmunosupresor",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Metronidazol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Metronidazol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Metronidazol",
    "forma": {
      "tipo_de_forma": "Comprimido vaginal",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Vaginal"
  },
  {
    "principio_activo": "Neomicina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Nifedipino",
    "forma": {
      "tipo_de_forma": "Comprimido acción retardada",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 20
      }
    },
    "categoria": "Antihipertensivo",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral",
    "alternativas": ["Nitrendipino"]
  },
  {
    "principio_activo": "Nistatina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "UI",
        "cantidad_de_dosis": 100000
      }
    },
    "categoria": "Antifúngico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Nistatina",
    "forma": {
      "tipo_de_forma": "Suspensión oral",
      "dosis": {
        "tipo_de_unidad": "UI/ml",
        "cantidad_de_dosis": 100000
      }
    },
    "categoria": "Antifúngico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Nistatina",
    "forma": {
      "tipo_de_forma": "Comprimido vaginal",
      "dosis": {
        "tipo_de_unidad": "UI",
        "cantidad_de_dosis": 100000
      }
    },
    "categoria": "Antifúngico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Vaginal"
  },
  {
    "principio_activo": "Nistatina",
    "forma": {
      "tipo_de_forma": "Pomada",
      "dosis": {
        "tipo_de_unidad": "UI/g",
        "cantidad_de_dosis": 100000
      }
    },
    "categoria": "Antifúngico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Tópica"
  },
  {
    "principio_activo": "Nitrofurantoína",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 50
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Nitrofurantoína",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Nitroglicerina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 0.6
      }
    },
    "categoria": "Vasodilatador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Sublingual"
  },
  {
    "principio_activo": "Omeprazol",
    "forma": {
      "tipo_de_forma": "Cápsula",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 20
      }
    },
    "categoria": "Antiulceroso",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ondansetrón",
    "forma": {
      "tipo_de_forma": "Supositorio",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 16
      }
    },
    "categoria": "Antiemético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Rectal"
  },
  {
    "principio_activo": "Paracetamol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 80
      }
    },
    "categoria": "Analgésico",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Paracetamol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Analgésico",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Paracetamol",
    "forma": {
      "tipo_de_forma": "Supositorio",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 125
      }
    },
    "categoria": "Analgésico",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Rectal"
  },
  {
    "principio_activo": "Paracetamol",
    "forma": {
      "tipo_de_forma": "Solución oral para gotas",
      "dosis": {
        "tipo_de_unidad": "mg/ml",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Analgésico",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Pilocarpina",
    "forma": {
      "tipo_de_forma": "Solución oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 2
      }
    },
    "categoria": "Midriático",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Pilocarpina",
    "forma": {
      "tipo_de_forma": "Solución oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 4
      }
    },
    "categoria": "Midriático",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Gluconato de Potasio",
    "forma": {
      "tipo_de_forma": "Elixir",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 31.2
      }
    },
    "categoria": "Suplemento mineral",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Prednisolona",
    "forma": {
      "tipo_de_forma": "Suspensión oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.12
      }
    },
    "categoria": "Corticoide",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Prednisolona",
    "forma": {
      "tipo_de_forma": "Suspensión oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 1
      }
    },
    "categoria": "Corticoide",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Prednisona",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 5
      }
    },
    "categoria": "Corticoide",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Propiltiouracilo",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 50
      }
    },
    "categoria": "Antitiroideo",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Propranolol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 10
      }
    },
    "categoria": "Betabloqueador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Propranolol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 40
      }
    },
    "categoria": "Betabloqueador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Ranitidina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 150
      }
    },
    "categoria": "Antiulceroso",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral",
    "alternativas": ["Famotidina"]
  },
  {
    "principio_activo": "Ranitidina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 300
      }
    },
    "categoria": "Antiulceroso",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral",
    "alternativas": ["Famotidina"]
  },
  {
    "principio_activo": "Risperidona",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 1
      }
    },
    "categoria": "Antipsicótico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral",
    "alternativas": ["Olanzapina", "Quetiapina", "Ziprasidona"]
  },
  {
    "principio_activo": "Risperidona",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 3
      }
    },
    "categoria": "Antipsicótico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral",
    "alternativas": ["Olanzapina", "Quetiapina", "Ziprasidona"]
  },
  {
    "principio_activo": "Salbutamol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 2
      }
    },
    "categoria": "Broncodilatador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Salbutamol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 4
      }
    },
    "categoria": "Broncodilatador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Salbutamol",
    "forma": {
      "tipo_de_forma": "Solución inyectable",
      "dosis": {
        "tipo_de_unidad": "mg/ml",
        "cantidad_de_dosis": 0.5
      }
    },
    "categoria": "Broncodilatador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Intramuscular"
  },
  {
    "principio_activo": "Salbutamol",
    "forma": {
      "tipo_de_forma": "Jarabe",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 2
      }
    },
    "categoria": "Broncodilatador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Salbutamol",
    "forma": {
      "tipo_de_forma": "Suspensión para inhalación oral",
      "dosis": {
        "tipo_de_unidad": "mcg/dosis",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Broncodilatador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Inhalatoria"
  },
  {
    "principio_activo": "Salbutamol",
    "forma": {
      "tipo_de_forma": "Solución para nebulización",
      "dosis": {
        "tipo_de_unidad": "mg/ml",
        "cantidad_de_dosis": 5
      }
    },
    "categoria": "Broncodilatador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Inhalatoria"
  },
  {
    "principio_activo": "Sales de Rehidratación Oral",
    "forma": {
      "tipo_de_forma": "Solución oral",
      "dosis": {
        "tipo_de_unidad": "mEq de Sodio/litro",
        "cantidad_de_dosis": 60
      }
    },
    "categoria": "Rehidratante",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Sales de Rehidratación Oral",
    "forma": {
      "tipo_de_forma": "Solución oral",
      "dosis": {
        "tipo_de_unidad": "mEq de Sodio/litro",
        "cantidad_de_dosis": 90
      }
    },
    "categoria": "Rehidratante",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Sertralina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 50
      }
    },
    "categoria": "Antidepresivo",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Sulpirida",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 300
      }
    },
    "categoria": "Antipsicótico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Tamoxifeno",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 10
      }
    },
    "categoria": "Antineoplásico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Tamoxifeno",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 20
      }
    },
    "categoria": "Antineoplásico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Teofilina",
    "forma": {
      "tipo_de_forma": "Solución oral",
      "dosis": {
        "tipo_de_unidad": "mg/15ml",
        "cantidad_de_dosis": 80
      }
    },
    "categoria": "Broncodilatador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Terbinafina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Antifúngico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Tetraciclina",
    "forma": {
      "tipo_de_forma": "Cápsula",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 250
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral",
    "alternativas": ["Doxiciclina"]
  },
  {
    "principio_activo": "Tetraciclina",
    "forma": {
      "tipo_de_forma": "Cápsula",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral",
    "alternativas": ["Doxiciclina"]
  },
  {
    "principio_activo": "Tietilperazina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 6.5
      }
    },
    "categoria": "Antiemético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Tietilperazina",
    "forma": {
      "tipo_de_forma": "Supositorio",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 6.5
      }
    },
    "categoria": "Antiemético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Rectal"
  },
  {
    "principio_activo": "Timolol",
    "forma": {
      "tipo_de_forma": "Solución oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.25
      }
    },
    "categoria": "Betabloqueador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Timolol",
    "forma": {
      "tipo_de_forma": "Solución oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.5
      }
    },
    "categoria": "Betabloqueador",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Tinidazol",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Tioridazina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 25
      }
    },
    "categoria": "Antipsicótico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Tioridazina",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Antipsicótico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Tioridazina",
    "forma": {
      "tipo_de_forma": "Jarabe",
      "dosis": {
        "tipo_de_unidad": "mg/5ml",
        "cantidad_de_dosis": 2
      }
    },
    "categoria": "Antipsicótico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Tobramicina",
    "forma": {
      "tipo_de_forma": "Solución oftálmica",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.3
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Tobramicina",
    "forma": {
      "tipo_de_forma": "Ungüento oftálmico",
      "dosis": {
        "tipo_de_unidad": "porcentaje",
        "cantidad_de_dosis": 0.3
      }
    },
    "categoria": "Antibiótico",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oftálmica"
  },
  {
    "principio_activo": "Tolbutamida",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 500
      }
    },
    "categoria": "Antidiabético",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Tramadol",
    "forma": {
      "tipo_de_forma": "Solución oral para gotas",
      "dosis": {
        "tipo_de_unidad": "mg/ml",
        "cantidad_de_dosis": 100
      }
    },
    "categoria": "Analgésico",
    "es_controlado": true,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Verapamilo",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 80
      }
    },
    "categoria": "Antihipertensivo",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Verapamilo",
    "forma": {
      "tipo_de_forma": "Comprimido",
      "dosis": {
        "tipo_de_unidad": "mg",
        "cantidad_de_dosis": 120
      }
    },
    "categoria": "Antihipertensivo",
    "es_controlado": false,
    "requiere_receta": true,
    "via_administracion": "Oral"
  },
  {
    "principio_activo": "Vitaminas A-C-D",
    "forma": {
      "tipo_de_forma": "Solución oral para gotas",
      "dosis": {
        "tipo_de_unidad": "según fórmula",
        "cantidad_de_dosis": 0
      }
    },
    "categoria": "Vitamina",
    "es_controlado": false,
    "requiere_receta": false,
    "via_administracion": "Oral"
  }
])