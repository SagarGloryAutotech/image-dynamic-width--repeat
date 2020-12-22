import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  canvasWidth: number = 150;
  imgHeight: number = 150;

  ngAfterViewInit(){
    let img1 = document.getElementById('myImage')
    this.fill_canvas(img1)
  }

  setStyle() {
    let img = document.getElementById('myImage') as any;
    var c = document.getElementById('canvas') as any;
    var ctx = c.getContext('2d');
    ctx.clearRect(0, 0, img.width, img.height);
    var pat = ctx.createPattern(img, 'repeat');
    ctx.rect(0, 0, this.canvasWidth, this.imgHeight);
    ctx.fillStyle = pat;
    ctx.fill();
  }

  fill_canvas(img) {
    // CREATE CANVAS CONTEXT.
    var canvas = document.getElementById('canvas') as any;
    var ctx = canvas.getContext('2d');
    canvas.width = img.width;
    this.canvasWidth = canvas.width;
    this.imgHeight = img.height
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0); // DRAW THE IMAGE TO THE CANVAS.
  }
}
