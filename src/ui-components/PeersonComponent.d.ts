/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Person } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PeersonComponentProps = React.PropsWithChildren<Partial<ViewProps> & {
    person?: Person;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function PeersonComponent(props: PeersonComponentProps): React.ReactElement;
