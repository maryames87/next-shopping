export default function home(req, res) {
  res.json({
    SliderItems: [
      { id: 0, name: "card1", image: "https://picsum.photos/200/300" },
      {
        id: 1,
        name: "card2",
        image: "https://picsum.photos/200/300",
      },
      {
        id: 2,
        name: "card3",
        image: "https://picsum.photos/200/300",
      },
      {
        id: 3,
        name: "card4",
        image: "https://picsum.photos/200/300",
      },
      {
        id: 4,
        name: "card5",
        image: "https://picsum.photos/200/300",
      },
      {
        id: 5,
        name: "card6",
        image: "https://picsum.photos/200/300",
      },
    ],
  });
}
