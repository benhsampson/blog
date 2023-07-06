import Link from "next/link";
import { LanguageIcon } from "./LanguageIcon";

export const Pages = () => (
  <div className="flex flex-col">
    <Link href="/sentiment-classifier" className="text-blue-500 text-base">
      Sentiment Classifier (<LanguageIcon icon="🐍" />)
    </Link>
    <Link href="/rnn" className="text-blue-500 text-base">
      Notes on: The Unreasonable Effectiveness of Recurrent Neural Networks (
      <LanguageIcon icon="🐍" />)
    </Link>
  </div>
);
