//real date=yy-mm-dd +1  faced a strange issue related to  date.toISOString().split('T')[0] that i couldn't fix
const notes = [
  {
    date: '2024-08-14',
    mood: 'indifférente',
    note: 'Je me suis absentée.',
  },
  {
    date: '2024-08-15',
    mood: 'enthousiaste',
    note: "L'usine est immense, très bien organisée et extrêmement propre. Ce qui m’a le plus impressionné, ce sont les voies piétonnes avec les marquages au sol et les indications qui accélèrent le déplacement du personnel, ainsi que les écrans géants diffusant leurs réalisations, leur taux de productivité, leurs objectifs une citation de la semaine et la musique ambiante, ce qui témoigne de leur attention aux détails. De plus, les chaines de productions étaient intelligemment structurées. La section entrepôt était gigantesque, rappelant celle d'Amazon. L’espace de réunion, la zone de repos, la cantine, les bureaux... Tout était un plaisir pour les yeux.",
  },
  {
    date: '2024-08-18',
    mood: 'excitée',
    note: "Pour réduire les coûts d'achat de certains produits provenant d'Allemagne, Draxlmaier achète un prototype similaire auprès d'un fournisseur local. Les services informatiques examinent le produit, vérifient s'il répond aux exigences, puis approuvent ou rejettent l'achat.",
  },
  {
    date: '2024-08-19',
    mood: 'épuisée',
    note: "Certaines problématiques de production nécessitent l'intervention du service IT. Aujourd'hui, nous avons dû récupérer trois tickets de production non conformes (défaut d'impression, déchirure, erreur de données). Pour traiter ces tickets et finaliser la feuille de dérogation, nous avons coordonné avec plusieurs chefs de ligne et avons dû obtenir les signatures de plusieurs directeurs.",
  },
  {
    date: '2024-08-20',
    mood: 'excitée',
    note: "J'ai pris un aperçu de la façon dont les techniciens de Telecom vérifient la vitesse des fibres optiques à l'usine Draxlmaier. Pour étendre la capacité du réseau, le technicien a ajouté une fibre optique et a vérifié les routeurs avec un analyseur de réseau.",
  },
  {
    date: '2024-08-21',
    mood: 'heureuse',
    note: 'Une journée légère au cours de laquelle nous avons effectué des vérifications des appareils, organisé les câbles, et résolu quelques problèmes techniques liés au réseau.',
  },
  {
    date: '2024-08-22',
    mood: 'détendue',
    note: "Nous avons rassemblé l'historique mensuel des scanners de chaque ligne de production et l'avons transmis au service technique.",
  },
  {
    date: '2024-08-25',
    mood: 'heureuse',
    note: "Nous avons installé un PC dans la zone de briefing, placé le CPU dans une armoire spéciale, arrangé les câbles à l'intérieur et sécurisé le tout avec un cadenas. C'était une tâche amusante.",
  },
  {
    date: '2024-08-26',
    mood: 'détendue',
    note: "J'ai eu l'occasion d'assister à une réunion générale au cours de laquelle le directeur général a rassemblé tout le personnel pour discuter des futurs défis avec le nouveau client (BMW) et des points à prendre en considération. Le service IT a fait le nécessaire pour garantir le bon déroulement de la réunion. (installation de l'écran, des micros, des haut-parleurs…)",
  },
  {
    date: '2024-08-27',
    mood: 'détendue',
    note: 'Journée de travail plus tranquille, marquée par le formatage de quelques appareils et la maintenance des autres.',
  },
  {
    date: '2024-08-28',
    mood: 'fière',
    note: "Le directeur d'office m'a confié une tâche urgente : remplir les données de deux mois concernant les quatre vérifications quotidiennes effectuées sur le serveur principal et le serveur de secours. Ça m'a permis de changer un peu de la routine habituelle.",
  },
  {
    date: '2024-08-29',
    mood: 'indifférente',
    note: "Journée ennuyeuse, j'en ai profité pour avancer sur des projets personnels.",
  },
  {
    date: '2024-09-01',
    mood: 'détendue',
    note: "Tâche mensuelle : nous avons collecté l'état des imprimantes dans l'usine, les avons scannées, et les avons envoyées à l'entité locataire.",
  },
  {
    date: '2024-09-02',
    mood: 'détendue',
    note: "Activation de quelques comptes Zscaler: c’est une solution de sécurité cloud qui protège contre les menaces en ligne et sécurise l'accès aux applications en filtrant le trafic Internet depuis le cloud.",
  },
  {
    date: '2024-09-03',
    mood: 'heureuse',
    note: "L'office s'est préparé pour la visite d'audit. De mon côté, j'ai profité de ce temps pour avancer dans ma auformation sur React.",
  },
  {
    date: '2024-09-04',
    mood: 'détendue',
    note: "Nous avons passé un certain temps à chercher pourquoi nous n'arrivions pas à afficher le contenu d'un PC sur deux moniteurs dans la chaine de production avec des câbles HDMI. Nous avons découvert que le PC était de type shopfloor et non office, la solution était d’utiliser un splitter HDMI.",
  },
  {
    date: '2024-09-05',
    mood: 'heureuse',
    note: "Aujourd'hui, il ont honoré les enfants du personnel qui ont brillamment terminé leur année scolaire, en leur offrant des cadeaux précieux pour célébrer leur réussite et marquer leur rentrée.",
  },
  {
    date: '2024-09-08',
    mood: 'épuisée',
    note: "Installation d'un nouveau routeur, intégration d'un PC à deux écrans dans la chaîne de production, et maintenance de quelques PC.",
  },
  {
    date: '2024-09-09',
    mood: 'épuisée',
    note: 'Reformatage de 10 PC pour un environnement Office, installation de ceux-ci dans la salle de formation, activation de leurs ports réseau et configuration du lecteur O:',
  },
  {
    date: '2024-09-10',
    mood: 'détendue',
    note: "Nous avons envoyé un écran géant et d'autres équipements à Sousse. J’ai consulté la documentation logistique, aidé à emballer les produits, et commencé à installer des supports pour PC et écrans dans la salle de formation.",
  },
  {
    date: '2024-09-11',
    mood: 'enthousiaste',
    note: "Une belle fin de semaine de stage : nous avons installé 10 nouveaux PC dans la salle de formation et les configurés et dans un délai court. J'ai aussi assisté à la cérémonie de reconnaissance des employés en présence du CEO de DRÄXLMAIER Mr Brandl.",
  },
  {
    date: '2024-09-12',
    mood: 'heureuse',
    note: "J'ai clôturé mon stage en installant une carte réseau et en explorant Rapid7, une plateforme de cybersécurité pour détecter les vulnérabilités des systèmes et des réseaux et gérer les risques.",
  },
];

export default notes;
