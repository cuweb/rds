export interface CardEventMetaProps {
    startDateTime: string;
    endDateTime: string;
    onCampus: boolean;
    onCampusBuilding?: string | null;
    onCampusRoomNumber?: string | null;
    eventAddress?: string;
}
export declare const CardEventMeta: ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: CardEventMetaProps) => JSX.Element;
//# sourceMappingURL=CardEventMeta.d.ts.map