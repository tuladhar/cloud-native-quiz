# **\*Free\*** Cloud Native Certifications Quiz

>[!NOTE]
> More quizzes in the 🧑‍🍳 baking...

Cloud Native Certifications Quiz is a free quiz platform aimed to help cloud-native enthusiasts and professionals test their knowledge and prepare for [CNCF cloud-native certifications](https://www.cncf.io/training/certification/). This project offers interactive quizzes for certifications such as KCNA, KCSA, CGOA, and more. Perfect for beginners and experts alike!

Explore the quizzes: [quiz.purutuladhar.com](https://quiz.purutuladhar.com)

## Demo

<img src="https://github.com/user-attachments/assets/140f2686-e221-4b93-8b57-ad8e50a08d6a" height=650 />

## Development

### Local
```bash
cd ~/next.js/quiz-app/quiz.purutuladhar.com
npx create-next-app@latest quiz-ui

cd quiz-ui
npm install framer-motion lucide-react canvas-confetti @icons-pack/react-simple-icons --legacy-peer-deps

npx next dev
```

### Build and release

```
npx next build
```

Upload the static output in the `out/` directory to this repo.


## License

This project is licensed under the [MIT License](https://github.com/tuladhar/cloud-native-quiz/edit/main/LICENSE).

## Acknowledgments

Thanks to all the contributors and open-source libraries that made this project possible.