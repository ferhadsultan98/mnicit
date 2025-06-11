import React from "react";
import {
  Code,
  Shield,
  Zap,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import "../../Styles/AboutSection.scss";

const AboutSection = () => {
  const teamMembers = [
    {
      name: "Elvin Məmmədov",
      position: "Baş Developer",
      email: "elvin@company.com",
    },
    {
      name: "Aygün Həsənova",
      position: "UI/UX Dizayner",
      email: "aygun@company.com",
    },
    {
      name: "Rəşad Əliyev",
      position: "Layihə Meneceri",
      email: "rashad@company.com",
    },
    {
      name: "Nigar Quliyeva",
      position: "Kiber Təhlükəsizlik Mütəxəssisi",
      email: "nigar@company.com",
    },
  ];

  const clients = [
    {
      name: "Client A",
      logo: "https://via.placeholder.com/150x50?text=Client+A",
    },
    {
      name: "Client B",
      logo: "https://via.placeholder.com/150x50?text=Client+B",
    },
    {
      name: "Client C",
      logo: "https://via.placeholder.com/150x50?text=Client+C",
    },
    {
      name: "Client D",
      logo: "https://via.placeholder.com/150x50?text=Client+D",
    },
    {
      name: "Client E",
      logo: "https://via.placeholder.com/150x50?text=Client+E",
    },
  ];

  const achievements = [
    { number: "150+", label: "Tamamlanmış Layihələr" },
    { number: "98%", label: "Müştəri Məmnuniyyəti" },
    { number: "5+", label: "İllik Təcrübə" },
    { number: "24/7", label: "Dəstək Mövcuddur" },
  ];

  const features = [
    "Ekspert texniki komanda",
    "Ən müasir texnologiyalar",
    "Çevik inkişaf prosesi",
    "Keyfiyyət təminatı testi",
    "Davamlı texniki dəstək",
    "Rəqabətli qiymətləndirmə",
  ];

  return (
    <section className="aboutSection" id="about">
      <div className="container">
        <div className="headerContent">
          <div className="headerText">
            <h2 className="mainTitle">HAQQIMIZDA</h2>
            <p className="subtitle">
              PM Systems, innovativ həllər və peşəkar məsləhətlər ilə
              biznesinizi inkişaf etdirməyə sadiqdir. Peşəkar komandamız hər
              layihə üçün dəqiq və yüksək keyfiyyətli nəticələr təmin etmək üçün
              ən müasir texnologiyalardan istifadə edir. Biz sistemlərin
              optimallaşdırılması və layihələrin idarə edilməsi ilə əlaqədar
              xüsusi dəstəyi təmin edərək sizin uğurunuza və böyüməyinizə
              fokuslanırıq.
            </p>
          </div>
          <div className="headerVisual">
            <div className="visualElement">
              <div className="floatingCard">
                <Code className="cardIcon" />
                <span>İnnovasiya</span>
              </div>
              <div className="floatingCard">
                <Shield className="cardIcon" />
                <span>Təhlükəsizlik</span>
              </div>
              <div className="floatingCard">
                <Zap className="cardIcon" />
                <span>Performans</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="teamGrid">
          {teamMembers.map((member, index) => (
            <div key={index} className="teamMemberCard">
              <div className="memberInfo">
                <h3 className="memberName">{member.name}</h3>
                <div className="memberHoverInfo">
                  <p className="memberPosition">{member.position}</p>
                  <p className="memberEmail">{member.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="mainContent">
          <div className="contentText">
            <h3 className="contentTitle">
              Niyə Bizim İT Həllərimizi Seçməlisiniz?
            </h3>
            <p className="contentDescription">
              İT sənayesində illərlə təcrübə ilə biz biznesin inkişafını və
              rəqəmsal transformasiyasını təmin edən hərtərəfli həllər təqdim
              edirik. Sertifikatlı mütəxəssislərimizdən ibarət komandamız
              texnologiya infrastrukturunuzun möhkəm, təhlükəsiz və ölçülənə
              bilən olmasını təmin edir.
            </p>

            <div className="featuresList">
              {features.map((feature, index) => (
                <div key={index} className="featureItem">
                  <CheckCircle className="checkIcon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="ctaButton">
              <span>Başla</span>
              <ArrowRight className="buttonIcon" />
            </button>
          </div>

          <div className="contentVisual">
            <div className="visualCard">
              <div className="cardHeader">
                <Users className="cardHeaderIcon" />
                <span>Komandamız</span>
              </div>
              <div className="cardContent">
                <p>
                  Sizin çətinliklərinizi həll etməyə hazır peşəkar mütəxəssislər
                </p>
                <div className="teamStats">
                  <div className="statItem">
                    <Award className="statIcon" />
                    <span>Sertifikatlı Mütəxəssislər</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clientsSection"></div>

        <div className="achievementsSection">
          <div className="achievementsGrid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievementCard">
                <div className="achievementNumber">{achievement.number}</div>
                <div className="achievementLabel">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
