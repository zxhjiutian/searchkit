import { SearchkitComponent, SearchkitComponentProps } from "../../../../../core";
export interface ResetFiltersProps extends SearchkitComponentProps {
}
export declare class ResetFilters extends SearchkitComponent<ResetFiltersProps, any> {
    translations: {
        "ClearAllFilters": string;
    };
    static propTypes: {};
    defineBEMBlocks(): {
        container: string;
    };
    hasFilters(): boolean;
    resetFilters(): void;
    renderResetButton(): JSX.Element;
    render(): JSX.Element;
}
