import { Content } from "@prismicio/client";
import { IconType } from "react-icons/lib";
import {
  LuCrown,
  LuDroplet,
  LuFlame,
  LuGem,
  LuTreePine,
  LuZap,
} from "react-icons/lu";

type AttributeData = {
  label: string;
  Icon: IconType;
};

const SCENT_PROFILES: Record<
  Content.FragnanceDocumentData["scent_profile"],
  AttributeData
> = {
  spicy: {
    label: "Spicy & Smoky",
    Icon: LuFlame,
  },
  woody: {
    label: "Woody & Herbal",
    Icon: LuTreePine,
  },
  fresh: {
    label: "Fresh & Aquatic",
    Icon: LuDroplet,
  },
};

const MOODS: Record<
  NonNullable<Content.FragnanceDocumentData["mood"]>,
  AttributeData
> = {
  bold: {
    label: "Bold & Seductive",
    Icon: LuCrown,
  },
  grounded: {
    label: "Grounded & Sophisticated",
    Icon: LuGem,
  },
  refresh: {
    label: "Refreshing & Invigorating",
    Icon: LuZap,
  },
};

type FragranceAttributesProps = {
  scentProfile: Content.FragnanceDocumentData["scent_profile"];
  mood: Content.FragnanceDocumentData["mood"];
  className?: string;
};

export const FragranceAttributes = ({
  scentProfile: providedScentProfile,
  mood: providedMood,
  className,
}: FragranceAttributesProps) => {
  const scentProfile = SCENT_PROFILES[providedScentProfile];
  const mood = providedMood ? MOODS[providedMood] : null;

  return (
    <div className={className}>
      <p className="text-base mb-2 font-semibold uppercase">Features</p>
      <div className="grid gap-2">
        <p className="flex items-center gap-2">
          <scentProfile.Icon className="size-6" />
          {scentProfile.label}
        </p>
        {mood && (
          <p className="flex items-center gap-2">
            <mood.Icon className="size-6" />
            {mood.label}
          </p>
        )}
      </div>
    </div>
  );
};
