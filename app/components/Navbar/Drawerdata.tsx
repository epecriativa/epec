import React from "react";
import Link from "next/link";
import Signdialog from "./Signdialog";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Sobre', href: '#sobre', current: true },
  { name: 'Cursos', href: '#courses', current: false },
  { name: 'Quiz', href: '#quiz', current: false },
  { name: 'Eventos', href: '#eventos', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                  'py-4 text-xl font-medium opacity-75 block border-b border-gray-100'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="mt-8 flex flex-col gap-4">
               {/* Usando o Signdialog aqui para manter a funcionalidade */}
               <Signdialog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
