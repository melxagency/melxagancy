import React, { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { Users, Plus, Edit, Trash2, Save, X } from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  position: string
  image_url: string
  bio: string
  created_at: string
}

interface TeamMemberForm {
  name: string
  position: string
  image_url: string
  bio: string
}

export default function TeamManagement() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<TeamMemberForm>({
    name: '',
    position: '',
    image_url: '',
    bio: ''
  })

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('members_teams')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setMembers(data || [])
    } catch (error) {
      console.error('Error fetching team members:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (editingMember) {
        const { error } = await supabase
          .from('members_teams')
          .update(formData)
          .eq('id', editingMember.id)

        if (error) throw error
      } else {
        const { error } = await supabase
          .from('members_teams')
          .insert([formData])

        if (error) throw error
      }

      setFormData({ name: '', position: '', image_url: '', bio: '' })
      setShowForm(false)
      setEditingMember(null)
      fetchMembers()
    } catch (error) {
      console.error('Error saving team member:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member)
    setFormData({
      name: member.name,
      position: member.position,
      image_url: member.image_url,
      bio: member.bio
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este miembro del equipo?')) return

    try {
      const { error } = await supabase
        .from('members_teams')
        .delete()
        .eq('id', id)

      if (error) throw error
      fetchMembers()
    } catch (error) {
      console.error('Error deleting team member:', error)
    }
  }

  const resetForm = () => {
    setFormData({ name: '', position: '', image_url: '', bio: '' })
    setShowForm(false)
    setEditingMember(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Users className="w-6 h-6 text-[#942ace]" />
          <h2 className="text-2xl font-bold text-gray-900">Gestión del Equipo</h2>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-[#942ace] text-white px-4 py-2 rounded-lg hover:bg-[#7a2299] transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Nuevo Miembro</span>
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                {editingMember ? 'Editar Miembro' : 'Nuevo Miembro'}
              </h3>
              <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#942ace] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Posición
                </label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#942ace] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL de la Imagen
                </label>
                <input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#942ace] focus:border-transparent"
                  placeholder="https://ejemplo.com/imagen.jpg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Biografía
                </label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#942ace] focus:border-transparent"
                  required
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 flex items-center justify-center space-x-2 bg-[#942ace] text-white py-2 rounded-lg hover:bg-[#7a2299] transition-colors disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  <span>{loading ? 'Guardando...' : 'Guardar'}</span>
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="aspect-w-3 aspect-h-4">
              <img
                src={member.image_url}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-[#942ace] text-sm font-medium mb-2">{member.position}</p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
              
              <div className="flex items-center justify-end space-x-2">
                <button
                  onClick={() => handleEdit(member)}
                  className="text-[#942ace] hover:text-[#7a2299] p-1"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="text-red-600 hover:text-red-800 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}