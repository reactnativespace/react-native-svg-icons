import Svg, { Path, Rect, Circle, Polyline, Line } from 'react-native-svg';

export const Icons = {
    bird: (props: any) => (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bird-icon lucide-bird"
            {...props}
        >
            <Path d="M16 7h.01" />
            <Path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
            <Path d="m20 7 2 .5-2 .5" />
            <Path d="M10 18v3" />
            <Path d="M14 17.75V21" />
            <Path d="M7 18a6 6 0 0 0 3.84-10.61" />
        </Svg>
    ),
    squirrel: (props: any) => (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-squirrel-icon lucide-squirrel"
            {...props}
        >
            <Path d="M15.236 22a3 3 0 0 0-2.2-5" />
            <Path d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" />
            <Path d="M18 13h.01" />
            <Path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" />
        </Svg>
    ),
    snail: (props: any) => (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-snail-icon lucide-snail"
            {...props}
        >
            <Path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" />
            <Circle cx={10} cy={13} r={8} />
            <Path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" />
            <Path d="M18 3 19.1 5.2" />
            <Path d="M22 3 20.9 5.2" />
        </Svg>
    ),
    rabbit: (props: any) => (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-rabbit-icon lucide-rabbit"
            {...props}
        >
            <Path d="M13 16a3 3 0 0 1 2.24 5" />
            <Path d="M18 12h.01" />
            <Path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
            <Path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
            <Path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
        </Svg>
    ),
    rat: (props: any) => (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-rat-icon lucide-rat"
            {...props}
        >
            <Path d="M13 22H4a2 2 0 0 1 0-4h12" />
            <Path d="M13.236 18a3 3 0 0 0-2.2-5" />
            <Path d="M16 9h.01" />
            <Path d="M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3" />
            <Path d="M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18" />
        </Svg>
    ),
    turtle: (props: any) => (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-turtle-icon lucide-turtle"
            {...props}
        >
            <Path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" />
            <Path d="M4.82 7.9 8 10" />
            <Path d="M15.18 7.9 12 10" />
            <Path d="M16.93 10H20a2 2 0 0 1 0 4H2" />
        </Svg>
    ),
    trees: (props: any) => (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trees-icon lucide-trees"
            {...props}
        >
            <Path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
            <Path d="M7 16v6" />
            <Path d="M13 19v3" />
            <Path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
        </Svg>
    )
}