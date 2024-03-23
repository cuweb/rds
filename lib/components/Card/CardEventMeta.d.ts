export interface CardEventMetaProps {
    startDateTime: string;
    endDateTime: string;
    onCampus: boolean;
    onCampusBuilding?: string | null;
    onCampusRoomNumber?: string | null;
    eventAddress?: string;
}
export declare const eventStyles: {
    dateBox: string;
    dateBoxMonth: string;
    dateBoxDay: string;
};
export declare const CardEventMeta: {
    ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: CardEventMetaProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};
