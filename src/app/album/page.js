import Image from 'next/image'
import myImg from '@/assets/probesh-deb-nath.webp'

const AlbumPage = () => {
    return (
        <div>
            <h2>AlbumPage from link</h2>
            <Image width={500} height={500} src="https://i.ibb.co/686tyHs/probesh-deb-nath.jpg" alt='my logo' />

            <h2>AlbumPage from local stroge</h2>
            <Image width={500} height={500} src={myImg} alt='my logo' />

        </div>
    )
}

export default AlbumPage