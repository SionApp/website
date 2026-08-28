import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, UserPlus, Shield } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";

const RegistrationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    cedula: "",
    telefono: "",
    direccion: "",
    correo: "",
    whatsapp: false,
    bautizado: false,
    fecha_bautizo: "",
  });

  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener('openRegistrationModal', handleOpenModal);
    return () => window.removeEventListener('openRegistrationModal', handleOpenModal);
  }, []);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      toast({
        title: "Error de seguridad",
        description: "Por favor, completa la verificación de seguridad.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    try {
      // Issue #72: register_visitor() reemplaza el insert directo a `users`
      // (ese camino ya no existe — ver fix de seguridad en la migración
      // 20260827000009). Deja al visitante SIN cuenta de login; un staff
      // valida más tarde desde el panel para darle acceso real.
      const { error } = await supabase.rpc('register_visitor', {
        p_first_name: formData.nombres,
        p_last_name: formData.apellidos,
        p_email: formData.correo,
        p_phone: formData.telefono,
        p_address: formData.direccion,
        p_id_number: formData.cedula,
        p_whatsapp: formData.whatsapp,
      });

      if (error) {
        throw error;
      } else {
        toast({
          title: "¡Registro exitoso!",
          description: "Te has registrado correctamente en nuestra iglesia. ¡Bienvenido a la familia!",
        });
        setIsOpen(false);
        setFormData({
          nombres: "",
          apellidos: "",
          cedula: "",
          telefono: "",
          direccion: "",
          correo: "",
          whatsapp: false,
          bautizado: false,
          fecha_bautizo: "",
        });
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al registrarte. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <UserPlus className="w-6 h-6 text-primary" />
            Únete a Nuestra Iglesia
          </DialogTitle>
          <DialogDescription>
            Completa el formulario para registrarte en nuestra comunidad de fe.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombres">Nombres *</Label>
              <Input
                id="nombres"
                value={formData.nombres}
                onChange={(e) => handleInputChange('nombres', e.target.value)}
                required
                placeholder="Ingresa tus nombres"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apellidos">Apellidos *</Label>
              <Input
                id="apellidos"
                value={formData.apellidos}
                onChange={(e) => handleInputChange('apellidos', e.target.value)}
                required
                placeholder="Ingresa tus apellidos"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cedula">Cédula *</Label>
              <Input
                id="cedula"
                value={formData.cedula}
                onChange={(e) => handleInputChange('cedula', e.target.value)}
                required
                placeholder="Número de cédula"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono *</Label>
              <Input
                id="telefono"
                value={formData.telefono}
                onChange={(e) => handleInputChange('telefono', e.target.value)}
                required
                placeholder="Número de teléfono"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="correo">Correo Electrónico *</Label>
            <Input
              id="correo"
              type="email"
              value={formData.correo}
              onChange={(e) => handleInputChange('correo', e.target.value)}
              required
              placeholder="tu@correo.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="direccion">Dirección *</Label>
            <Input
              id="direccion"
              value={formData.direccion}
              onChange={(e) => handleInputChange('direccion', e.target.value)}
              required
              placeholder="Dirección completa"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="whatsapp"
                checked={formData.whatsapp}
                onCheckedChange={(checked) => handleInputChange('whatsapp', checked as boolean)}
              />
              <Label htmlFor="whatsapp" className="text-sm">
                Acepto recibir comunicaciones por WhatsApp
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="bautizado"
                checked={formData.bautizado}
                onCheckedChange={(checked) => handleInputChange('bautizado', checked as boolean)}
              />
              <Label htmlFor="bautizado" className="text-sm">
                Estoy bautizado
              </Label>
            </div>

            {formData.bautizado && (
              <div className="space-y-2 ml-6">
                <Label htmlFor="fecha_bautizo">Fecha de Bautizo</Label>
                <Input
                  id="fecha_bautizo"
                  type="date"
                  value={formData.fecha_bautizo}
                  onChange={(e) => handleInputChange('fecha_bautizo', e.target.value)}
                />
              </div>
            )}
          </div>

          {/* Cloudflare Turnstile */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Verificación de seguridad
            </Label>
            <div className="flex justify-center">
              <Turnstile
                siteKey="1x00000000000000000000AA"
                onSuccess={setTurnstileToken}
                onError={() => setTurnstileToken("")}
                onExpire={() => setTurnstileToken("")}
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Registrando...
                </>
              ) : (
                "Registrarme"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;