export interface ListingEventMetaProps {
    startDateTime: string;
    endDateTime: string;
    onCampus: boolean;
    onCampusBuilding?: string | null;
    onCampusRoomNumber?: string | null;
    eventAddress?: string;
}
export declare const styles: {
    redIcon: string;
};
export declare const ListingEventMeta: {
    ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: ListingEventMetaProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};
