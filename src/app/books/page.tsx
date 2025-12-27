export default function Books() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Books I&apos;ve Read recently</h1>
      <ul className="space-y-3 text-gray-700 text-sm">
        <li>
          <span className="font-medium text-gray-900">Steve Jobs</span> by Walter Isaacson
          <p className="text-gray-600 text-xs mt-1">The definitive biography of the Apple co-founder, chronicling his life, career, and impact on technology.</p>
        </li>
        <li>
          <span className="font-medium text-gray-900">Dune</span> by Frank Herbert
          <p className="text-gray-600 text-xs mt-1">Epic science fiction about power, ecology, and fate set on the desert planet Arrakis.</p>
        </li>
        <li>
          <span className="font-medium text-gray-900">The Kite Runner</span> by Khaled Hosseini
          <p className="text-gray-600 text-xs mt-1">A powerful story of friendship, betrayal, and redemption set against the backdrop of Afghanistan.</p>
        </li>
        <li>
          <span className="font-medium text-gray-900">Dark Matter</span> by Blake Crouch
          <p className="text-gray-600 text-xs mt-1">A mind-bending science fiction thriller about parallel universes and the choices that define us.</p>
        </li>
        <li>
          <span className="font-medium text-gray-900">107 Days</span> by Kamala Harris
          <p className="text-gray-600 text-xs mt-1">Memoir of the shortest presidential campaign in history.</p>
        </li>
        <li>
          <span className="font-medium text-gray-900">To Kill a Mockingbird</span> by Harper Lee
          <p className="text-gray-600 text-xs mt-1">A classic American novel about racial injustice and childhood innocence in the American South.</p>
        </li>
        <li>
          <span className="font-medium text-gray-900">Project Hail Mary</span> by Andy Weir
          <p className="text-gray-600 text-xs mt-1">A science fiction adventure about a lone astronaut racing to save humanity from extinction.</p>
        </li>
        <li>
          <span className="font-medium text-gray-900">Homo Deus</span> by Yuval Noah Harari
          <p className="text-gray-600 text-xs mt-1">A brief history of tomorrow exploring humanity&apos;s future.</p>
        </li>
      </ul>
    </div>
  );
}

