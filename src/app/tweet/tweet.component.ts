import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Tweet } from '../models/tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {

  listaTweets = [];
  nuevoTweet: Tweet;

  constructor() {
    this.nuevoTweet = {
      id: null,
      texto: undefined,
      autor: undefined
    }
    let miTweet = {
      id: 1,
      texto: "My tweet",
      autor: "César"
    }

    this.listaTweets.push(miTweet);
  }

  ngOnInit(): void {
  }

  addTweet() {
    if (this.nuevoTweet.texto && this.nuevoTweet.autor) {
      this.listaTweets.push({ ...this.nuevoTweet, id: this.listaTweets.length });
      this.nuevoTweet = {
        id: null,
        texto: undefined,
        autor: undefined
      }
    }
  }
}
