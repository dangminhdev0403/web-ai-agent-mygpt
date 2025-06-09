import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PackageCardProps {
  title: string;
  subtitle?: string;
  price?: string;
  setupFee?: string;
  maintenanceFee?: string;
  tasks?: string[];
  features: string[];
  notes?: string[];
  bgColor: string;
  borderColor: string;
  description: string;
  unitFree?: string;
}

export const PackageCard = ({
  title,
  subtitle,
  price,
  setupFee,
  maintenanceFee,
  tasks,
  features,
  notes,
  bgColor,
  borderColor,
  description,
  unitFree,
}: PackageCardProps) => {
  return (
    <Card className={`relative ${bgColor} border-2 ${borderColor}`}>
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-lg font-bold text-teal-700 mb-4">
          {title}
        </CardTitle>
        <div className="space-y-2">
          {subtitle && <div className="text-sm">{subtitle} ➡</div>}
          {price && (
            <div className="text-center">
              <span className="text-sm">Giá thành: </span>
              <span className="text-xl font-bold text-red-600">{price}</span>
            </div>
          )}
          {setupFee && (
            <div className="text-center space-y-1">
              <div>
                <span className="text-sm">Khởi tạo: </span>
                <span className="text-xl font-bold text-red-600">
                  {setupFee}
                </span>
              </div>
              <div>
                <span className="text-sm">Phí vận hành: </span>
                <span className="text-lg font-bold text-red-600">
                  {maintenanceFee}
                </span>
              </div>
            </div>
          )}
          {unitFree && (
            <div className="text-center space-y-1">
              <div>
                <span className="text-xl font-bold text-amber-700">
                  {unitFree}
                </span>
              </div>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {tasks && tasks.length > 0 && (
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Nhiệm vụ:</h4>
            <div className="space-y-1 text-sm">
              {tasks.map((task, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{task}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {features.length > 0 && (
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Đặc điểm:</h4>
            <div className="space-y-1 text-sm">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {notes && notes.length > 0 && (
          <div className="pt-4 border-t">
            <p className="text-sm font-bold italic mb-2">
              Chi phí cập nhật, thay đổi thông tin:
            </p>
            {notes.map((note, i) => (
              <p key={i} className="text-sm">
                {note}
              </p>
            ))}
          </div>
        )}

        <div className="text-xs text-blue-600 italic">{description}</div>
      </CardContent>
    </Card>
  );
};
