import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import imageGalleryType from "./imageGalleryType";
import pageType from "./pageType";
import sectionImageOverlay from "./sectionImageOverlay";
import textWithIllustrationType from "./textWithIllu";
import { videoType } from "./videoType";
import { formType } from "./formType";
import { heroType } from "./heroType";
import expertisesType from "./expertiseType";
import { promotionType } from "./promotionType";
import projectType from "./projectType";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        postType,
        authorType,
        imageGalleryType,
        categoryType,
        blockContentType,
        pageType,
        sectionImageOverlay,
        textWithIllustrationType,
        videoType,
        formType,
        heroType,
        expertisesType,
        promotionType,
        projectType,
    ],
};
