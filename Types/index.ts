export interface MoviesProps {
    ID: number,
    title: string,
    link: string,
    imgSrc: string,
    slug: string,
    description: string
}


export type AnimationTickerProps = {
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
    duration?: number;
    children: JSX.Element[];

}