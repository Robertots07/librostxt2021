import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss']
})
export class PostListingComponent implements OnInit {

  public posts: Object[] = [
    {
      icon: 'fa fa-heart',
      color: 'teal-text',
      category: 'Lifestyle',
      title: 'This is title of the news',
      img: 'https://mdbootstrap.com/img/Photos/Others/img (38).jpg',
      content: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor.`,
      by: 'Jessica Clark',
      date: '26/08/2016',
      number: 'First',
    },
    {
      icon: 'fa fa-plane',
      color: 'cyan-text',
      category: 'Travels',
      title: 'This is title of the news',
      img: 'https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg',
      content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
               voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.`,
      by: 'Jessica Clark',
      date: '24/08/2016',
      number: 'Second',
    },
    {
      icon: 'fa fa-camera',
      color: 'brown-text',
      category: 'Photography',
      title: 'This is title of the news',
      img: 'https://mdbootstrap.com/img/Photos/Others/img (35).jpg',
      content: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
      by: 'Jessica Clark',
      date: '21/08/2016',
      number: 'Third',
    },
    {
      icon: 'fa fa-heart',
      color: 'red-text',
      category: 'Lifestyle',
      title: 'This is title of the news',
      img: 'https://mdbootstrap.com/img/Photos/Others/img (39).jpg',
      content: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
      by: 'Jessica Clark',
      date: '21/08/2016',
      number: 'Fourth',
    },
  ];
  public posts2: Object[] = [
      {
        icon: 'fa fa-map',
        color: 'pink-text',
        category: 'Adventure',
        title: 'This is title of the news',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg',
        content: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                  minus id quod maxime placeat facere possimus voluptas.`,
        by: 'Billy Foster',
        date: '15/07/2016',
        number: 'First',
      },
      {
        icon: 'fa fa-plane',
        color: 'cyan-text',
        category: 'Travels',
        title: 'This is title of the news',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg',
        content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores.`,
        by: 'Billy Foster',
        date: '12/07/2016',
        number: 'Second',
      },
      {
        icon: 'fa fa-fire',
        color: 'indygo-text',
        category: 'Animals',
        title: 'This is title of the news',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(118).jpg',
        content: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  quia consequuntur magni dolores eos qui ratione voluptatem.`,
        by: 'Billy Foster',
        date: '10/07/2016',
        number: 'Third',
      }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}


