import { useEffect, useState } from 'react'
import { UserPlus, Search, Trash2, Edit3, Phone, Mail, Users } from 'lucide-react'
import { contactsStorage } from '../lib/storage'

interface Contact {
  id: string
  name: string
  email: string
  phone: string
}

const Contacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    const data = await contactsStorage.getAll()
    setContacts(data)
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const addContact = async () => {
    if (!name || !email || !phone) return
    await contactsStorage.add({ name, email, phone })
    setName(''); setEmail(''); setPhone('')
    load()
  }

  const editContact = (c: Contact) => {
    setName(c.name); setEmail(c.email); setPhone(c.phone); setEditingId(c.id)
  }

  const saveEdit = async () => {
    if (!editingId) return
    await contactsStorage.update(editingId, { name, email, phone })
    setEditingId(null)
    setName(''); setEmail(''); setPhone('')
    load()
  }

  const deleteContact = async (id: string) => {
    await contactsStorage.delete(id)
    load()
  }

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <div className="text-center py-12 text-white">Chargement...</div>

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-6 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
        <UserPlus size={28} className="text-blue-600" />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
          className="flex-1 min-w-[120px] p-3 rounded-xl border border-blue-200 focus:border-blue-400 outline-none bg-white/50"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="flex-1 min-w-[140px] p-3 rounded-xl border border-blue-200 focus:border-blue-400 outline-none bg-white/50"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Téléphone"
          className="flex-1 min-w-[120px] p-3 rounded-xl border border-blue-200 focus:border-blue-400 outline-none bg-white/50"
        />
        <button
          onClick={editingId ? saveEdit : addContact}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 shadow-lg transition-all"
        >
          {editingId ? <Edit3 size={20} /> : 'Ajouter'}
        </button>
      </div>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl mb-6">
        <div className="flex items-center gap-3">
          <Search size={24} className="text-gray-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher..."
            className="flex-1 p-3 rounded-xl border border-gray-200 focus:border-blue-400 outline-none"
          />
        </div>
      </div>
      <div className="space-y-3">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-white/50"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex-1 min-w-[200px]">
                <h3 className="font-bold text-xl text-blue-900 mb-1">{contact.name}</h3>
                <div className="flex flex-wrap items-center gap-4 text-gray-700">
                  <span className="flex items-center gap-2">
                    <Mail size={18} />
                    {contact.email}
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone size={18} />
                    {contact.phone}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => editContact(contact)}
                  className="p-2 text-blue-600 hover:bg-blue-100 rounded-xl"
                >
                  <Edit3 size={20} />
                </button>
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="p-2 text-blue-600 hover:bg-blue-100 rounded-xl"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredContacts.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Users size={64} className="mx-auto mb-4 opacity-50" />
          <p>Aucun contact</p>
        </div>
      )}
    </div>
  )
}

export default Contacts
