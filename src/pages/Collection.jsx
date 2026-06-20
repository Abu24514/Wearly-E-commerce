import LeftPart from '../components/CollectionPart/LeftPart';
import RightPart from '../components/CollectionPart/RightPart';
const Collection = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-6 sm:gap-14 pt-10 sm:pt-14 border-t border-gray-200'>
      {/* ================= LEFT SIDEBAR ================= */}
      <LeftPart />
      {/* ================= RIGHT SIDE  ================= */}
      <div className='flex-1'>
        <RightPart />
      </div>

    </div>
  )
}

export default Collection