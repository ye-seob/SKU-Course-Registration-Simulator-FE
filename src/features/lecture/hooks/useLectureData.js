import {useEffect} from 'react';
import useLectureStore from '../store/lectureStore';
import useSearchStore from '../../search/store/searchStore';
import {search} from '../../search/api/search';
import {getCart} from '../../cart/api/cart';
import useViewStore from "../../view/store/viewStore.js";

export const useLectureData = () => {
    const { setLectures, lectures } = useLectureStore();
    const { major, type, keyword, isCart } = useSearchStore();

    const isWaiting = useViewStore((s) => s.isWaiting);

    useEffect(() => {
        const fetchData = async () => {
            const data = isCart
                ? await getCart()
                : await search(keyword, major, type);
            setLectures(data);
        };
        fetchData();
    }, [isCart, major, type, keyword, isWaiting]);

    return { lectures };
};