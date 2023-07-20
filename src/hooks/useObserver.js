import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;
    // если observer уже создан и в поле current что-то находится,
    // отключаем наблюдение за всеми элементами, за которыми наблюдает
    // observer в текующий момент
    if (observer.current) observer.current.disconnect();
    var cb = function(entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
}