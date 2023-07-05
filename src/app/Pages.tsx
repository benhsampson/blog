import Link from "next/link";
import { LanguageIcon } from "./LanguageIcon";

export const Pages = () => (
  <div>
    <Link href="/sentiment-classifier" className="text-blue-500 text-base">
      Sentiment Classifier (<LanguageIcon icon="🐍" />)
    </Link>
  </div>
);
