<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="sk_SK">
<context>
    <name>DownloadExtractThread</name>
    <message>
        <location filename="../downloadextractthread.cpp" line="166"/>
        <source>Error writing to storage</source>
        <translation>Chyba pri zápise na úložisko</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="188"/>
        <location filename="../downloadextractthread.cpp" line="348"/>
        <source>Error extracting archive: %1</source>
        <translation>Chyba pri rozbaľovaní archívu: %1</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="234"/>
        <source>Error mounting FAT32 partition</source>
        <translation>Chyba pri pripájaní partície FAT32</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="244"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>Operačný systém nepripojil partíciu FAT32</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="267"/>
        <source>Error changing to directory &apos;%1&apos;</source>
        <translation>Chyba pri vstupe do adresára &apos;%1&apos;</translation>
    </message>
</context>
<context>
    <name>DownloadThread</name>
    <message>
        <location filename="../downloadthread.cpp" line="127"/>
        <source>Error running diskpart: %1</source>
        <translation>Chyba počas behu diskpart: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="148"/>
        <source>Error removing existing partitions</source>
        <translation>Chyba pri odstraňovaní existujúcich partiícií</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="174"/>
        <source>Authentication cancelled</source>
        <translation>Zrušená autentifikácia</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="177"/>
        <source>Error running authopen to gain access to disk device &apos;%1&apos;</source>
        <translation>Chyba pri spúšťaní authopen v snahe o získanie prístupu na diskové zariadenie &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="178"/>
        <source>Please verify if &apos;Raspberry Pi Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation>Preverte, prosím, či má &apos;Raspberry Pi Imager&apos; prístup k &apos;vymeniteľným nosičom&apos; v nastaveniach súkromia (pod &apos;súbormi a priečinkami&apos;, prípadne mu udeľte &apos;plný prístup k diskom&apos;).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="199"/>
        <source>Cannot open storage device &apos;%1&apos;.</source>
        <translation>Nepodarilo sa otvoriť zariadenie úložiska &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="213"/>
        <source>Write error while zero&apos;ing out MBR</source>
        <translation>Chyba zápisu pri prepisovaní MBR nulami</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="225"/>
        <source>Write error while trying to zero out last part of card.
Card could be advertising wrong capacity (possible counterfeit)</source>
        <translation>Chyba zápisu pri prepisovaní poslednej časti karty nulami.
Karta pravdepodobne udáva nesprávnu kapacitu (a môže byť falošná)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="346"/>
        <source>Access denied error while writing file to disk.</source>
        <translation>Odopretý prístup pri zápise súboru na disk.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="351"/>
        <source>Controlled Folder Access seems to be enabled. Please add both rpi-imager.exe and fat32format.exe to the list of allowed apps and try again.</source>
        <translation>Vyzerá, že máte zapnutý Controlled Folder Access. Pridajte, prosím, rpi-imager.exe a fat32format.exe do zoznamu povolených aplikácií a skúste to znovu.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="357"/>
        <source>Error writing file to disk</source>
        <translation>Chyba pri zápise na disk</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="585"/>
        <source>Error writing to storage (while flushing)</source>
        <translation>Chyba pri zápise na úložisko (počas volania flush)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="592"/>
        <source>Error writing to storage (while fsync)</source>
        <translation>Chyba pri zápise na úložisko (počas volania fsync)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="573"/>
        <source>Download corrupt. Hash does not match</source>
        <translation>Stiahnutý súbor je poškodený. Kontrolný súčet nesedí</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="626"/>
        <source>Error writing first block (partition table)</source>
        <translation>Chyba pri zápise prvého bloku (tabuľky partícií)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="682"/>
        <source>Error reading from storage.
SD card may be broken.</source>
        <translation>Chyba pri čítaní z úložiska.
Karta SD môže byť poškodená.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="701"/>
        <source>Verifying write failed. Contents of SD card is different from what was written to it.</source>
        <translation>Overovanie zápisu skončilo s chybou. Obsah karty SD sa nezhoduje s tým, čo na ňu bolo zapísané.</translation>
    </message>
</context>
<context>
    <name>DriveFormatThread</name>
    <message>
        <location filename="../driveformatthread.cpp" line="63"/>
        <location filename="../driveformatthread.cpp" line="124"/>
        <location filename="../driveformatthread.cpp" line="185"/>
        <source>Error partitioning: %1</source>
        <translation>Chyba pri zápise partícií: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="84"/>
        <source>Error starting fat32format</source>
        <translation>Chyba pri spustení fat32format</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="94"/>
        <source>Error running fat32format: %1</source>
        <translation>Chyba pri spustení fat32format: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="104"/>
        <source>Error determining new drive letter</source>
        <translation>Chyba pri zisťovaní písmena nového disku</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="109"/>
        <source>Invalid device: %1</source>
        <translation>Neplatné zariadenie: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="146"/>
        <source>Error formatting (through udisks2)</source>
        <translation>Chyba pri formátovaní (pomocou udisks2)</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="174"/>
        <source>Error starting sfdisk</source>
        <translation>Chyba pri spustení sfdisk</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="196"/>
        <source>Error starting mkfs.fat</source>
        <translation>Chyba pri spustení mkfs.fat</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="206"/>
        <source>Error running mkfs.fat: %1</source>
        <translation>Chyba pri spustení mkfs.fat: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="213"/>
        <source>Formatting not implemented for this platform</source>
        <translation>Formátovanie nie je na tejto platforme implementované</translation>
    </message>
</context>
<context>
    <name>ImageWriter</name>
    <message>
        <location filename="../imagewriter.cpp" line="170"/>
        <source>Storage capacity is not large enough.
Needs to be at least %1 GB</source>
        <translation>Kapacita úložiska je nedostatočná
Musí byť aspoň %1 GB</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="176"/>
        <source>Input file is not a valid disk image.
File size %1 bytes is not a multiple of 512 bytes.</source>
        <translation>Vstupný súbor nie je platným obrazom disku.
Veľkosť súboru %1 bajtov nie je násobkom 512 bajtov.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="200"/>
        <source>Downloading and writing image</source>
        <translation>Sťahujem a zapisujem obraz</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="409"/>
        <source>Select image</source>
        <translation>Vyberte obraz</translation>
    </message>
</context>
<context>
    <name>LocalFileExtractThread</name>
    <message>
        <location filename="../localfileextractthread.cpp" line="38"/>
        <source>Error opening image file</source>
        <translation>Chyba pri otváraní súboru s obrazom</translation>
    </message>
</context>
<context>
    <name>MsgPopup</name>
    <message>
        <location filename="../MsgPopup.qml" line="96"/>
        <source>NO</source>
        <translation>NIE</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="109"/>
        <source>YES</source>
        <translation>ÁNO</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="122"/>
        <source>CONTINUE</source>
        <translation>POKRAČOVAŤ</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../linux/linuxdrivelist.cpp" line="111"/>
        <source>Internal SD card reader</source>
        <translation>Interná čítačka SD kariet</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="23"/>
        <source>Raspberry Pi Imager v%1</source>
        <translation>Raspberry Pi Imager v%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="734"/>
        <source>Are you sure you want to quit?</source>
        <translation>Skutočne chcete skončiť?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="735"/>
        <source>Raspberry Pi Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation>Raspberry Pi Imager ešte neskončil.&lt;br&gt;Ste si istý, že chcete skončiť?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="90"/>
        <location filename="../main.qml" line="303"/>
        <source>Operating System</source>
        <translation>Operačný systém</translation>
    </message>
    <message>
        <location filename="../main.qml" line="102"/>
        <source>CHOOSE OS</source>
        <translation>VÝBER OS</translation>
    </message>
    <message>
        <location filename="../main.qml" line="133"/>
        <location filename="../main.qml" line="587"/>
        <source>SD Card</source>
        <translation>SD karta</translation>
    </message>
    <message>
        <location filename="../main.qml" line="145"/>
        <location filename="../main.qml" line="860"/>
        <source>CHOOSE SD CARD</source>
        <translation>VYBERTE SD KARTU</translation>
    </message>
    <message>
        <location filename="../main.qml" line="175"/>
        <source>WRITE</source>
        <translation>ZÁPIS</translation>
    </message>
    <message>
        <location filename="../main.qml" line="752"/>
        <location filename="../main.qml" line="805"/>
        <source>Writing... %1%</source>
        <translation>Zapisujem... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="220"/>
        <source>CANCEL WRITE</source>
        <translation>ZRUŠIŤ ZÁPIS</translation>
    </message>
    <message>
        <location filename="../main.qml" line="120"/>
        <source>Select this button to change the operating system</source>
        <translation>Pre zmenu operačného systému kliknite na toto tlačidlo</translation>
    </message>
    <message>
        <location filename="../main.qml" line="158"/>
        <source>Select this button to change the destination SD card</source>
        <translation>Pre zmenu cieľovej SD karty kliknite na toto tlačidlo</translation>
    </message>
    <message>
        <location filename="../main.qml" line="180"/>
        <source>Select this button to start writing the image</source>
        <translation>Kliknutím na toto tlačidlo spustíte zápis</translation>
    </message>
    <message>
        <location filename="../main.qml" line="223"/>
        <location filename="../main.qml" line="802"/>
        <source>Cancelling...</source>
        <translation>Ruším operáciu...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="235"/>
        <source>CANCEL VERIFY</source>
        <translation>ZRUŠIŤ OVEROVANIE</translation>
    </message>
    <message>
        <location filename="../main.qml" line="238"/>
        <location filename="../main.qml" line="825"/>
        <location filename="../main.qml" line="878"/>
        <source>Finalizing...</source>
        <translation>Ukončujem...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="384"/>
        <location filename="../main.qml" line="854"/>
        <source>Erase</source>
        <translation>Vymazať</translation>
    </message>
    <message>
        <location filename="../main.qml" line="385"/>
        <source>Format card as FAT32</source>
        <translation>Formátovať kartu ako FAT32</translation>
    </message>
    <message>
        <location filename="../main.qml" line="392"/>
        <source>Use custom</source>
        <translation>Použiť vlastný</translation>
    </message>
    <message>
        <location filename="../main.qml" line="393"/>
        <source>Select a custom .img from your computer</source>
        <translation>Použiť vlastný súbor img. na Vašom počítači</translation>
    </message>
    <message>
        <location filename="../main.qml" line="479"/>
        <source>Local file</source>
        <translation>Miestny súbor</translation>
    </message>
    <message>
        <location filename="../main.qml" line="692"/>
        <source>[WRITE PROTECTED]</source>
        <translation>[OCHRANA PROTI ZÁPISU]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="746"/>
        <source>Warning</source>
        <translation>Varovanie</translation>
    </message>
    <message>
        <location filename="../main.qml" line="765"/>
        <source>All existing data on &apos;%1&apos; will be erased.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>Všetky existujúce dáta na &apos;%1&apos; budú odstránené.&lt;br&gt;Naozaj chcete pokračovať?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="855"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; bola vymazaná&lt;br&gt;&lt;br&gt;Teraz môžete odstrániť SD kartu z čítačky</translation>
    </message>
    <message>
        <location filename="../main.qml" line="885"/>
        <location filename="../main.qml" line="927"/>
        <source>Error parsing os_list.json</source>
        <translation>Chyba pri spracovaní os_list.json</translation>
    </message>
    <message>
        <location filename="../main.qml" line="965"/>
        <source>Connect an USB stick containing images first.&lt;br&gt;The images must be located in the root folder of the USB stick.</source>
        <translation>Najprv pripojte USB kľúč, ktorý obsahuje diskové obrazy.&lt;br&gt;Obrazy sa musia nachádzať v koreňovom priečinku USB kľúča.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="980"/>
        <source>SD card is write protected.&lt;br&gt;Push the lock switch on the left side of the card upwards, and try again.</source>
        <translation>SD karta je chránená proti zápisu.&lt;br&gt;Presuňte prepínač zámku na ľavej strane karty smerom hore a skúste to znova.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="416"/>
        <source>Back</source>
        <translation>Späť</translation>
    </message>
    <message>
        <location filename="../main.qml" line="417"/>
        <source>Go back to main menu</source>
        <translation>Prejsť do hlavnej ponuky</translation>
    </message>
    <message>
        <location filename="../main.qml" line="474"/>
        <source>Released: %1</source>
        <translation>Vydané: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="477"/>
        <source>Cached on your computer</source>
        <translation>Uložené na počítači</translation>
    </message>
    <message>
        <location filename="../main.qml" line="481"/>
        <source>Online - %1 GB download</source>
        <translation>Online %1 GB na stiahnutie</translation>
    </message>
    <message>
        <location filename="../main.qml" line="638"/>
        <location filename="../main.qml" line="690"/>
        <location filename="../main.qml" line="696"/>
        <source>Mounted as %1</source>
        <translation>Pripojená ako %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="784"/>
        <source>Error downloading OS list from Internet</source>
        <translation>Chyba pri sťahovaní zoznamu OS z Internetu</translation>
    </message>
    <message>
        <location filename="../main.qml" line="828"/>
        <source>Verifying... %1%</source>
        <translation>Overujem... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="846"/>
        <source>Error</source>
        <translation>Chyba</translation>
    </message>
    <message>
        <location filename="../main.qml" line="853"/>
        <source>Write Successful</source>
        <translation>Zápis úspešne skončil</translation>
    </message>
    <message>
        <location filename="../main.qml" line="857"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; bol zapísaný na &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;Teraz môžete odstrániť SD kartu z čítačky</translation>
    </message>
</context>
</TS>
