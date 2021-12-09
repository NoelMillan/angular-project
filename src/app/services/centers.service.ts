import { Center } from './../models/center';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentersService {

  centers: Center[] = [
    {id: 0, location: "Málaga", name: "Centro Comercial Rosaleda", description: "El Centro Comercial Rosaleda es un centro comercial localizado en el distrito Palma-Palmilla de la ciudad española de Málaga, próximo al Estadio La Rosaleda. Está localizado en la Avda. Simón Bolívar s/n.", img: "../../../assets/images/rosaleda.jpg", interactivePoints: 15, reviews: 62},
    {id: 1, location: "Málaga", name: "Larios Centro", description: "El Centro Comercial Larios Centro es un centro comercial localizado en el distrito Centro de la ciudad española de Málaga. En noviembre de 2019 presentó su nueva imagen e instalaciones, después de una profunda transformación con un coste de 28 millones de euros.", img: "../../../assets/images/larios.jpg", interactivePoints: 12, reviews: 32},
    {id: 2, location: "Málaga", name: "María Zambrano", description: "Málaga-María Zambrano es la principal estación de ferrocarril de la ciudad española de Málaga, en la comunidad autónoma de Andalucía. Constituye un cambiador de transportes intermodal, manteniendo conexiones de autobús y metro. Dispone de amplios servicios de media y larga distancia.", img: "../../../assets/images/mariazam.jpg", interactivePoints: 15, reviews: 42},
    {id: 3, location: "Málaga", name: "Málaga Plaza", description: "El Centro Comercial Málaga Plaza es un centro comercial localizado en la ciudad española de Málaga.", img: "../../../assets/images/malagaplaza.jpg", interactivePoints: 7, reviews: 21},
    {id: 4, location: "Sevilla", name: "Nervión Plaza", description: "El Centro Comercial Nervión Plaza vio la luz en el año 1.998. Desde entonces es considerado un Centro Comercial de referencia en Sevilla. Líder en nivel de afluencias e imagen.", img: "../../../assets/images/nervionplaza.jpg", interactivePoints: 12, reviews: 32},
    {id: 5, location: "Sevilla", name: "Centro Comercial Torre Sevilla", description: "Torre Sevilla es el primer rascacielos de la ciudad española de Sevilla cuya inauguración data de 2015. Cuenta en su base con un centro comercial con dos edificios y una vía central. Junto a la torre está situado el CaixaForum.", img: "../../../assets/images/torresevilla.jpg", interactivePoints: 22, reviews: 46},
    {id: 6, location: "Sevilla", name: "Centro Comercial Los Arcos", description: "El Centro Comercial Los Arcos de Sevilla se encuentra situado en el casco urbano de la ciudad, en su área de expansión, al este de su centro histórico tradicional.<br>Se ubica sobre una amplia parcela de proporciones casi cuadradas, emplazada en una esquina en la confluencia entre la avenida de Andalucía y la avenida de José María Javierre.", img: "../../../assets/images/losarcos.jpg", interactivePoints: 15, reviews: 32},
    {id: 7, location: "Sevilla", name: "Plaza de Armas", description: "Antigua estación ferroviaria remodelada para albergar una amplia selección de tiendas, restaurantes y cines.", img: "../../../assets/images/plazalasarmas.jpg", interactivePoints: 5, reviews: 12},
    {id: 8, location: "Granada", name: "Serrallo Plaza", description: "Centro comercial con cine, pista de patinaje, parque multiaventura y gimnasio en centro de dos plantas con tiendas y restaurantes.", img: "../../../assets/images/serrallo.jpg", interactivePoints: 16, reviews: 23},
    {id: 9, location: "Granada", name: "Centro Comercial Neptuno", description: "Era uno de los primeros centros comerciales que abría sus puertas en la provincia granadina, levantando gran expectación, lo que se tradujo en que rápidamente fueron muchas las empresas que aquí se instalaron y, también, muchos los granadinos que empezaron a convertir a Neptuno en el centro para sus compras.", img: "../../../assets/images/neptuno.jpg", interactivePoints: 15, reviews: 31},
    {id: 10, location: "Granada", name: "Centro Comercial Nevada", description: "El Nevada Shopping (o simplemente el Nevada) es un centro comercial situado en el municipio español de Armilla, en el Área Metropolitana de Granada, siendo el centro comercial más grande de la provincia de Granada y uno de los diez más grandes de España.", img: "../../../assets/images/nevada.jpg", interactivePoints: 23, reviews: 42},
    {id: 11, location: "Almería", name: "Centro Comercial Torrecárdenas", description: "El Centro Comercial Torrecárdenas es un centro comercial situado en la ciudad española de Almería, frente al Hospital Universitario Torrecárdenas, que fue inaugurado el 25 de octubre de 2018.", img: "../../../assets/images/torrecardenas.jpg", interactivePoints: 20, reviews: 10},
    {id: 12, location: "Almería", name: "Centro Comercial Mediterráneo", description: "El Centro Comercial Mediterráneo es un centro comercial situado en la ciudad española de Almería, ubicado en el barrio de Villablanca.", img: "../../../assets/images/mediterraneo.jpg", interactivePoints: 10, reviews: 11}
  ]


  constructor() { }
}
