import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = 
  [
    {id:0,firstName:"Debra",lastName:"Syer",email:"dsyert@twitpic.com",password:"mFE0Xnop",centersVisited:29,reviews:9},
    {id:1,firstName:"Jeanne",lastName:"Roles",email:"jroles0@cyberchimps.com",password:"1E6A1Rv7sC6",centersVisited:28,reviews:3},
    {id:2,firstName:"Milena",lastName:"Parkinson",email:"mparkinson1@abc.net.au",password:"4nPkpW6jeR",centersVisited:21,reviews:16},
    {id:3,firstName:"Ysabel",lastName:"Newlove",email:"ynewlove2@reference.com",password:"KIqXyEUHgr",centersVisited:13,reviews:9},
    {id:4,firstName:"Isidora",lastName:"Ivermee",email:"iivermee3@biglobe.ne.jp",password:"auU7C7XaRsNC",centersVisited:24,reviews:28},
    {id:5,firstName:"Isak",lastName:"Fantham",email:"ifantham4@nymag.com",password:"z6H7ION",centersVisited:18,reviews:8},
    {id:6,firstName:"Cally",lastName:"Waud",email:"cwaud5@reference.com",password:"F73rER",centersVisited:21,reviews:18},
    {id:7,firstName:"Gavra",lastName:"Marguerite",email:"gmarguerite6@harvard.edu",password:"FsvecW",centersVisited:28,reviews:28},
    {id:8,firstName:"Jacquenette",lastName:"Titmuss",email:"jtitmuss7@gravatar.com",password:"nM4fil4OQcC5",centersVisited:26,reviews:26},
    {id:9,firstName:"Gladi",lastName:"Tipping",email:"gtipping8@jalbum.net",password:"rEsWJvmGoOnk",centersVisited:25,reviews:20},
    {id:10,firstName:"Zita",lastName:"Duell",email:"zduell9@reuters.com",password:"FpJfyQPZsN",centersVisited:4,reviews:23},
    {id:11,firstName:"Isiahi",lastName:"Mellhuish",email:"imellhuisha@un.org",password:"FfY5yjU0T6u6",centersVisited:30,reviews:15},
    {id:12,firstName:"Ewan",lastName:"Cave",email:"ecaveb@latimes.com",password:"bD0qAZE",centersVisited:18,reviews:17},
    {id:13,firstName:"Wang",lastName:"Grayson",email:"wgraysonc@elegantthemes.com",password:"uuum1J",centersVisited:4,reviews:25},
    {id:14,firstName:"Floris",lastName:"Maase",email:"fmaased@topsy.com",password:"sJFoEzOpvVY",centersVisited:15,reviews:25},
    {id:15,firstName:"Demeter",lastName:"Milmo",email:"dmilmoe@bravesites.com",password:"6F5X7axRv",centersVisited:16,reviews:21},
    {id:16,firstName:"Jamil",lastName:"Stallybrass",email:"jstallybrassf@oakley.com",password:"e8D8kRn06dD",centersVisited:9,reviews:1},
    {id:17,firstName:"Ossie",lastName:"Vispo",email:"ovispog@fc2.com",password:"l5Ml9Ad",centersVisited:25,reviews:2},
    {id:18,firstName:"Wren",lastName:"Elecum",email:"welecumh@bloglovin.com",password:"tM26zv",centersVisited:9,reviews:2},
    {id:19,firstName:"Cherice",lastName:"Reuben",email:"creubeni@ow.ly",password:"yankng6fA",centersVisited:4,reviews:13},
    {id:20,firstName:"Reid",lastName:"Lathan",email:"rlathanj@about.com",password:"TYhDIIgAH",centersVisited:18,reviews:26},
    {id:21,firstName:"Tomasine",lastName:"Silvermann",email:"tsilvermannk@dyndns.org",password:"qmAGAEsqGHo8",centersVisited:24,reviews:19},
    {id:22,firstName:"Janith",lastName:"Truckett",email:"jtruckettl@ted.com",password:"7c2VFKdy0h",centersVisited:28,reviews:22},
    {id:23,firstName:"Jerry",lastName:"McGeechan",email:"jmcgeechanm@va.gov",password:"ik7aeePVk",centersVisited:29,reviews:2},
    {id:24,firstName:"Troy",lastName:"Greenhalf",email:"tgreenhalfn@slideshare.net",password:"FCnHl8V7RWN",centersVisited:11,reviews:30},
    {id:25,firstName:"Aurilia",lastName:"Learie",email:"alearieo@nhs.uk",password:"gEEBOP4",centersVisited:30,reviews:6},
    {id:26,firstName:"Aleda",lastName:"Harrhy",email:"aharrhyp@example.com",password:"DBgiDOTdtbC",centersVisited:20,reviews:12},
    {id:27,firstName:"Janeczka",lastName:"Gyenes",email:"jgyenesq@soundcloud.com",password:"Q4RoxSppy",centersVisited:26,reviews:8},
    {id:28,firstName:"Hussein",lastName:"Kasher",email:"hkasherr@seesaa.net",password:"KnUF8mMjc",centersVisited:24,reviews:18},
    {id:29,firstName:"Laraine",lastName:"Grzeszczak",email:"lgrzeszczaks@smh.com.au",password:"z1K6PJ7I",centersVisited:4,reviews:16},
]

  constructor() { }
}